import app from "./app";
import { PORT } from "./config";
import "./database";
import "./libs/initialSetup.js";

app.listen(PORT);

console.log("server listen on port", app.get("port"));
