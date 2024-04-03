import mongoose from "mongoose"

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!)
    /* Here, TypeScript checks whether env.MONGO_URI has a value or not.
     We can verify its value using an if-else statement, 
     but instead, I used the "!" operator. By using this operator,
     I am telling TypeScript that it has a value. */
     const connection = mongoose.connection

     connection.on('connected' , ()=>{
      console.log('MongoDb connected')
     })
     connection.on('error', (err)=>{
      console.log("Mongodb connection error , please make sure db is up and running: " + err)
      process.exit()
     })
  } catch (error) {
    console.error('Something went wrong in connecting to DB:' , error)
  }
  
}

