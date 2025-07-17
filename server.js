import express from "express";
import dotenv from "dotenv";
import { testTagGenerate } from "./services/tagService.js";
import { OpenAI } from 'openai';

// 환경변수
dotenv.config();

const app = express();
const PORT = process.env.PORT;
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;


app.listen(PORT, () => {
    console.log("server running at", PORT);
    console.log("OPENAI_API_KEY", OPENAI_API_KEY);
    testTagGenerate(OPENAI_API_KEY);
    //console.log(MONGODB_URI);
    //connectDB();
});