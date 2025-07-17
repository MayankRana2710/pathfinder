import { ChatTogetherAI } from "@langchain/community/chat_models/togetherai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import dotenv from 'dotenv';
dotenv.config();


const model = new ChatTogetherAI({
    apiKey: process.env.TOGETHERAI_API_KEY,
    // model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
});

const prompt=ChatPromptTemplate.fromTemplate(
    `You are a concerned mentor, who is trying to help a student to be the best in {input} and he can get a good package`
)

const chain=prompt.pipe(model);

const response=await chain.invoke({
    input:"software engineering",
})

console.log(response.content);