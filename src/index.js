import mongoose from "mongoose";
import { DB_NAME } from './constants.js';

























// import express from "express";
// const app = express();

// (async () => {
//     try {
//         // Corrected connection string format
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log("Connected to MongoDB");

//         // Error handler for the Express app
//         app.on("error", (err) => {
//             console.error("Error:", err);
//             throw err;
//         });

//         // Start the Express server
//         app.listen(process.env.PORT, () => {
//             console.log("Server is running on port:", process.env.PORT);
//         });

//     } catch (error) {
//         console.error("Error:", error);
//     }
// })();
