import mongoose from "mongoose";
import Quote, { QuoteModel } from "./models/Quote";
import User, { UserModel } from "./models/User";

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/quotewise_database");

// Check connection
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", async () => {
  console.log("Connected to MongoDB");

  try {
    // Create a user
    const user: UserModel = await User.create({
      username: "example_user",
      email: "example@example.com",
      password: "password", // You should hash the password before saving in a real application
      // Add any other user fields here
    });

    console.log("User created successfully:", user);

    // Define array of quotes to insert
    const quotesToInsert: Array<{
      content: string;
      author: any;
      userPrompt?: string;
    }> = [
      {
        content: "The only way to do great work is to love what you do.",
        author: user._id,
        userPrompt: "What do you love doing?",
      },
      {
        content: "Believe you can and you're halfway there.",
        author: user._id,
        userPrompt: "What do you believe you can do?",
      },
      {
        content:
          "The future belongs to those who believe in the beauty of their dreams.",
        author: user._id,
        userPrompt: "What are your dreams?",
      },
      {
        content:
          "The only limit to our realization of tomorrow will be our doubts of today.",
        author: user._id,
        userPrompt: "What are you doubting today?",
      },
      {
        content:
          "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: user._id,
        userPrompt: "What are you doing to continue?",
      },
      // Add more quotes as needed
    ];

    // Insert quotes into the database
    await Quote.insertMany(quotesToInsert);

    console.log("Quotes seeded successfully.");
  } catch (error) {
    console.error("Error seeding quotes:", error);
  } finally {
    // Disconnect from MongoDB
    mongoose.disconnect();
    console.log("Disconnected from MongoDB");
  }
});
