// Arquivo de inicialização do servidor backend.
// Usa Express e CORS para lidar com requisições HTTP e permitir chamadas do front-end.
// Define rota base '/' para os endpoints de usuário e roda o servidor na porta 8800.

import express from "express";
import userRoutes from "./routes/users.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", userRoutes);

app.listen(8800);
