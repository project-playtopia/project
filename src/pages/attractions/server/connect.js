import mongoose from "mongoose";
const connection_url = `mongodb+srv://projectplaytopia:1234@playtopia.f4fkwmu.mongodb.net/`;

const connect = () => {
    // 배포환경이 아니라면,
    if (process.env.NODE_ENV !== "production") {
        // 디버그 true로 설정, SQL문이 콘솔에 출력된다.
        mongoose.set("debug", true);
    }

    mongoose
        .connect(connection_url, {
            dbName: "attractions", // 컬렉션을 관리하는 database 이름 설정
        })
        .then(() => {
            console.log("Connected to MongoDB"); // 연결 성공
        })
        .catch((err) => {
            console.error("Connected fail to MongoDB"); // 연결 실패
            console.log(err);
        });
};

export default connect;