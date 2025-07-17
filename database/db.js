import { MongoClient } from "mongodb";

let db = null;

export const connectDB = async () => {
    // DB 연결 후 해당 DB 반환
    try {
        // 이미 DB가 연결되어 있는 경우
        if (db) return db;

        const MONGODB_URI = process.env.MONGO_URI_LOCAL;
        const DB_NAME = process.env.DB_NAME;
        // mongoDB 연결
        // MongoDB 객체 생성(mongoDB와의 연결을 관리, 상호작용)
        const client = new MongoClient(MONGODB_URI);
        db = client.db(DB_NAME); // 데이터베이스 선택

        // DB와의 연결 시도
        await client.connect();

        console.log("🍅 MongoDB 연결 성공!");
        return db;
    } catch (error) {
        console.log(`🥓 MongoDB 연결실패: ${error}`);

        process.exit(1);    // 프로그램 강제 종료
    }
}