import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import dotenv from "dotenv";
dotenv.config();

export const query = async (req, res) => {
    const { mood, topics, field } = req.body;

    if (!mood || !topics || !field) {
        return res.status(400).json({ error: "Data is missing." });
    }

    try {
        const model = new ChatGroq({
            apiKey: process.env.GROQ_API_KEY,
            model: "llama-3.3-70b-versatile",
            temperature: 0.5,
        });

        const prompt = ChatPromptTemplate.fromTemplate(`
            You are a helpful mentor in {field}.  
            Given the user's mood: "{mood}"  
            And their topic: "{topics}"  
            Provide a short personalised study suggestion.  
            Avoid asking further questions.
            keep the reponse short and precise and only suggest 1-2 topics.
        `);

        const output = new StringOutputParser();

        const chain = prompt.pipe(model).pipe(output);

        const response = await chain.invoke({
            mood: mood.join(", "),
            topics: topics,
            field: field,
        });

        const formattedResponse = response.replace(/"([^"]+)"/g, "**$1**");

        console.log("Suggesting a roadmap for you");

        return res.status(200).json({
            content: formattedResponse,
        });
    } catch (error) {
        console.log("Error logged:", error);
        return res.status(500).json("ERROR in AI fetching");
    }
};
