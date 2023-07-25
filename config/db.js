import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://ferxas:u9YskECRp7ECtqdr@cluster1.7nqqsof.mongodb.net/');
    console.log(
      `Connected to database ${conn.connection.host}`.bgMagenta.white
    );
  } catch (error) {
    console.log(`Error in mongodb connection: ${error}`.bgRed.white);
  }
};

export default connectDB;
