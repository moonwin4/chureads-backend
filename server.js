import express from "express";
import dotenv from "dotenv";
import { testTagGenerate } from "./services/tagService.js";
import { OpenAI } from 'openai';
import postRouter from "./routes/posts.js";

// 환경변수
dotenv.config();

const app = express();
const PORT = process.env.PORT;
//onst OPENAI_API_KEY = process.env.OPENAI_API_KEY;

// JSON형태의 데이터를 객체로 변환
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 라우터 미들웨어 등록
// /posts/ 등 라우터 사용
app.use("/posts", postRouter);

app.listen(PORT, () => {
    console.log("server running at", PORT);
    //console.log("OPENAI_API_KEY", OPENAI_API_KEY);
    //testTagGenerate(OPENAI_API_KEY);
    //console.log(MONGODB_URI);
    //connectDB();
});