import express from "express";
import morgan from "morgan";
import cors from "cors";
import productRoutes from "./routes/product.routes.js"
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json);
app.use(morgan("common"));
app.use(cors());
app.use("/api", productRoutes)

app.listen(PORT);
console.log(`Server running on port ${PORT}`);