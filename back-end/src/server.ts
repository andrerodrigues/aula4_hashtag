import express from "express";
import cors from "cors";
import ArtistsControler from "./controllers/ArtistsController";
import SongsController from "./controllers/SongsController";

const app = express();
const PORT = 3002;

app.use('/', ArtistsControler);
app.use('/', SongsController);
app.use(cors()); // Middleware para permitir requisições de outros domínios
app.use(express.json()); // Middleware para parsear JSON


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

