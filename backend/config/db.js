import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log(`MongooDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB

// MONGO_URI = mongodb+srv://abbas123:abbas1234@abbasshop.rgxy9.mongodb.net/abbasshopdb?retryWrites=true&w=majority old db

// mongodb+srv://abbas123:<password>@abbasshop2cluster.09gai.mongodb.net/<dbname>?retryWrites=true&w=majority  new db
