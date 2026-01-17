import "dotenv/config";
import express from "express";
import weatherRoutes from "./routes/weather.routes.js";
import cors from "cors";

const PORT = process.env.PORT;
const app = express();
app.use(cors());

app.use(express.json());

app.use("/api", weatherRoutes);

app.listen(5000, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
