import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

//Routes...
import productsRoutes from "./routes/products.routes";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/users.routes";
import { PORT } from "./config";

const app = express();

//Settings...
app.set("port", PORT || 4000);
app.set("json spaces", 4);

//Middlewares...
app.use(cors());
app.use(helmet())
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Routes...
app.use("/api/products", productsRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

export default app;
