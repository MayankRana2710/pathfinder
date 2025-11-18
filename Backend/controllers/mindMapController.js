// import { ChatTogetherAI } from "@langchain/community/chat_models/togetherai";
// import { ChatPromptTemplate } from "@langchain/core/prompts";
// import { JsonOutputParser, StringOutputParser } from "@langchain/core/output_parsers";
// import dotenv from 'dotenv';
// dotenv.config();

// export const format = async (req, res) => {
//     const [topics, time] = req.body;
//     try {
//         const model = new ChatTogetherAI({
//             apiKey: process.env.TOGETHERAI_API_KEY,
//             model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
//             temperature: 0.5,
//         })

//         const prompt = ChatPromptTemplate.fromTemplate(
//             `
// You are an assistant that generates JSON data compatible with jsMind for creating a study mindmap.
// ### Task:
// Given a *topic* and *available study time (in days), create a hierarchical mindmap structure in **valid JSON format* suitable for jsMind.
// ### Output Format (jsMind JSON structure):
// {
//   "meta": {
//     "name": "<Main topic>",
//     "author": "AI Model",
//     "version": "1.0"
//   },
//   "format": "node_tree",
//   "data": {
//     "id": "root",
//     "topic": "<Main topic>",
//     "children": [
//       {
//         "id": "sub1",
//         "topic": "<Subtopic 1>",
//         "direction": "right",
//         "children": [
//           { "id": "sub1_1", "topic": "<Concept 1>" },
//           { "id": "sub1_2", "topic": "<Concept 2>" }
//         ]
//       },
//       {
//         "id": "sub2",
//         "topic": "<Subtopic 2>",
//         "direction": "left",
//         "children": [
//           { "id": "sub2_1", "topic": "<Concept 1>" },
//           { "id": "sub2_2", "topic": "<Concept 2>" }
//         ]
//       }
//     ]
//   }
// }
// ### Guidelines:
// - Divide the topic into logical subtopics and key concepts.
// - Adjust depth and detail according to the *number of days*:
//   - *1 day* → Simple mindmap (few main topics, concise ideas).
//   - *2-4 days* → Moderate detail (clear subtopics and related concepts).
//   - *5+ days* → Detailed mindmap (deep hierarchy, examples, and cross-links).
// - Keep node names short, meaningful, and readable.
// `
//         )

//         const output = new JsonOutputParser();

//         const chain = prompt.pipe(model).pipe(output);

//         const response = await chain.invoke({
//             topics: topics,
//             time: time,
//         })
//         console.log("Suggesting a mindmap for you");
//         return await res.status(200).json({
//             content: response
//         })
//     }
//     catch (error) {
//         res.status(500).json("ERROR in AI fetching");
//     }
// }


import { ChatGroq } from "@langchain/groq";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { JsonOutputParser } from "@langchain/core/output_parsers";
import dotenv from "dotenv";
dotenv.config();

export const format = async (req, res) => {
  console.log("Incoming request body:", req.body);

  // Destructure from object sent by frontend
  const { topics, time } = req.body;

  // Validate input
  if (!topics || !time) {
    return res.status(400).json({ error: "Missing topics or time in request" });
  }

  try {
    // Initialize model
    const model = new ChatGroq({
      apiKey: process.env.GROQ_API_KEY,
      model: "llama-3.3-70b-versatile",
      temperature: 0.5,
    });

    // Prompt template
    const prompt = ChatPromptTemplate.fromTemplate(`
You are an assistant that generates JSON data compatible with jsMind for creating a study mindmap.

### Task:
Given a *topic* and *available study time (in days)*, create a hierarchical mindmap structure in **valid JSON format** suitable for jsMind.

### Output Format (jsMind JSON structure):
{
  "meta": {
    "name": "<Main topic>",
    "author": "AI Model",
    "version": "1.0"
  },
  "format": "node_tree",
  "data": {
    "id": "root",
    "topic": "<Main topic>",
    "children": [
      {
        "id": "sub1",
        "topic": "<Subtopic 1>",
        "direction": "right",
        "children": [
          { "id": "sub1_1", "topic": "<Concept 1>" },
          { "id": "sub1_2", "topic": "<Concept 2>" }
        ]
      },
      {
        "id": "sub2",
        "topic": "<Subtopic 2>",
        "direction": "left",
        "children": [
          { "id": "sub2_1", "topic": "<Concept 1>" },
          { "id": "sub2_2", "topic": "<Concept 2>" }
        ]
      }
    ]
  }
}

### Guidelines:
- Divide the topic into logical subtopics and key concepts.
- Adjust depth and detail according to *study days*:
  - *1 day* → Simple mindmap.
  - *2-4 days* → Moderate detail.
  - *5+ days* → Deep hierarchy with examples.
- Keep node names short and meaningful.
    `);

    const output = new JsonOutputParser();
    const chain = prompt.pipe(model).pipe(output);

    let response;

    try {
      response = await chain.invoke({ topics, time });
    } catch (aiError) {
      console.error("AI invocation failed:", aiError);
      return res.status(500).json({ error: "AI failed to generate mindmap" });
    }

    console.log("Mindmap generated successfully:", response);
    return res.status(200).json({ content: response });

  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
