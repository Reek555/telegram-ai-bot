# Telegram AI Bot (Node.js + Google Gemini)

A Telegram AI bot built with **JavaScript** and running on **Node.js**, powered by **Google’s Gemini LLM** for intelligent responses.

---

## Features
- Connects directly with your Telegram bot  
- Uses Google Gemini models for natural, contextual AI conversations  
- Lightweight Node.js setup  

---

## Prerequisites

Before you start, make sure you have the following:

1. **Telegram Bot Token**  
   - Create a new bot via [@BotFather](https://t.me/BotFather) on Telegram.  
   - Copy your bot token — you’ll need it later.

2. **Google AI Studio Account**  
   - Go to [Google AI Studio](https://aistudio.google.com) and create a project.  
   - Generate an API key (your “project token”) for the Gemini model.

3. **Node.js Installed**  
   - Download and install Node.js from [nodejs.org](https://nodejs.org).  
   - Verify installation with:
     ```bash
     node -v
     npm -v
     ```

---

## ⚙️ Setup & Installation

after cloning the reopository
   
1. **Install dependencies**
   ```bash
   npm install
   ```
   
   
   
2. **Install dependencies**
Create a ```.env``` file in the project root and add environment variables
   
   
3. **start the application**
   ```bash
   npm start
   ```
   
   
## Usage

Once the app is running:

1. Open Telegram and go to your bot (the one you created via @BotFather).

2. Send any message — the bot will reply using Gemini’s AI model.




## Notes

- Make sure your environment variables are correctly set; otherwise, the bot won’t start.

- You can modify the prompt behavior or model version in the source code to customize responses.



