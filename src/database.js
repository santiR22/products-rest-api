import mongoose from "mongoose";
import { MONGODB_URI } from "./config";


mongoose.set("strictQuery", true);
mongoose
  .connect(MONGODB_URI)
  .then((db) => console.log("DB is connected"))
  .catch((error) => console.log(error.message));

/* try {
  const db = await mongoose.connect(MONGODB_URI);
  console.log("Database is connected to", db.connection.name);
} catch (error) {
  console.error(error.message);
} */
