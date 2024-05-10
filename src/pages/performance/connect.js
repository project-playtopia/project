import mongoose from 'mongoose';
const connectionUrl = `mongodb+srv://projectplaytopia:1234@playtopia.f4fkwmu.mongodb.net/`
                
const connect = () => {
  if(process.env.NODE_ENV !== 'production'){
    mongoose.set("debug", true)
  }
  mongoose.connect(connectionUrl,{
    dbName : "performance"
  })
  .then(()=>{
    console.log("Connected to MongoDB")
  })
  .catch((err)=>{
    console.log(`Connected fail to MongoDB`)
    console.error(err)
  })
}

connect();

export default connect