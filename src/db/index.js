import mongoose from "mongoose";
import { DB_NAME } from '../constants';
import { error } from "console";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`\n monboDB connected: ${connectionInstance}`)
    }
    catch (error) {
        console.log("moongoDB connection error", error)
        process.exit(1)
    }
}   