
require('dotenv').config()

const {GoogleGenAI} = require("@google/genai");




const ai = new GoogleGenAI({ apiKey: process.env.LLM_KEY });

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "explain phelosophy in few words",
  });
  console.log(response.text);
}

main();