import mongoose from   "mongoose";

const connect_url = 'mongodb+srv://projectplaytopia:1234@playtopia.f4fkwmu.mongodb.net/';

// 연결
const connect = () => {
    if(process.env.NODE_ENV !== 'prodyction'){
        mongoose.set("debug", true)
    }

    mongoose
        .connect(connect_url, {
            dbName : "FaqExplainData"
        })
        .then(() => {
            console.log('연결')
        })
        .catch((err) => {
            console.log('연결안됨')
            console.log(err)
        })
}

export default connect;