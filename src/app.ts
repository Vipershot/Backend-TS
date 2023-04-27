import "dotenv/config";
import express from "express";
import { router } from "./routes";
import db from "./config/mongo";
import cors from "cors";

const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
db().then(() => console.log("Conexion Lista"));
app.listen(PORT, () => console.log(`Listo por el puerto ${PORT}`));
