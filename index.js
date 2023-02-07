import { ChatGPTAPI } from "chatgpt";
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const api = new ChatGPTAPI({
  apiKey: process.env.OPENAI_API_KEY,
});

function stringSplit(str, size) {
  const numChunks = Math.ceil(str.length / size);
  const chunks = new Array(numChunks);

  for (let i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }

  return chunks;
}

const createSummary = async (text) => {
  const array = stringSplit(text, 15000);
  const summary = ``;
  for (let i = 0; i < array.length; i++) {
    const res = await api.sendMessage(`Write summary for the podcast: 
        ${array[i]}`);
    summary += res.text;
  }
  return summary;
};

app.post("/summary", async (req, res) => {
  const summary = await createSummary(req.body.text);
  return res.send(summary);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
