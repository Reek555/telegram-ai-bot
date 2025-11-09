require('dotenv').config()

const {GoogleGenAI} = require("@google/genai");
const fs = require('node:fs/promises');
const ai = new GoogleGenAI({ apiKey: process.env.LLM_KEY });

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TG_TOKEN;
const bot = new TelegramBot(token, {polling: true});




async function main() {


    const data = await fs.readFile('data.json', { encoding: 'utf8' })


    const chat = ai.chats.create({
                model: "gemini-2.5-flash",
                history: [
                  {
                    role: "user",
                    parts: [{ text: `${data} \n
                      you are an assistant that speaks on behalf of the shop owner,  \n
                      you answer costumer queries in the boundaries of provided data, \n
                      keeep it concise and don't provide any informations that is not asked by the customer, the exchange should resemble instant chat convo \n
                      `}]
                    
                  }
                ],
                });


    bot.on('message', async (msg) => {


        response = await chat.sendMessage({
                            message: msg,
                        });

        bot.sendMessage(msg.chat.id, response.text);
 
    });

    console.log("the app is running!")


}

main (); 








