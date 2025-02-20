import express from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import { Artist } from "./entity/Artist";
import { Song } from "./entity/Song";
//import {artistArray} from "./data/artists";
//import {songsArray} from "./data/sounds";

const app = express();
const PORT = 3002;

app.use(cors()); // Middleware para permitir requisições de outros domínios
app.use(express.json()); // Middleware para parsear JSON

// Função que inicializa o banco de dados
async function initializeDatabase() {
    try {
        await AppDataSource.initialize();
        // const songRepository = AppDataSource.getRepository(Song);

        // const songCount = await songRepository.count();
        
        // if(songCount == 0) { 
        //     // Adicionando as músicas no banco de dados
        //     await songRepository.save(songsArray);
        //     console.log("Músicas salvas com sucesso!");
        // } else {
        //     // Buscar todas as músicas
        //     const songs = await songRepository.find();
        //     console.log(songs);
        // }

        // const artistRepository = AppDataSource.getRepository(Artist);
        // const artistCount = await artistRepository.count();
        // if(artistCount == 0) {
        //     await artistRepository.save(artistArray);
        //     console.log("Artistas salvos com sucesso!");
        // } else {
        // // Buscar todos os artistas
        //   const artists = await artistRepository.find();
        //   console.log(artists);
        // }

    } catch (error) {
        console.error("Erro ao conectar ao banco de dados:", error);
    }
}

// Inicia o servidor sem esperar pela inicialização do banco de dados
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);

    // Inicializa o banco de dados depois que o servidor estiver rodando
    initializeDatabase();
});

app.get("/songs", async (req, res) => {
    const songRepository = AppDataSource.getRepository(Song);
    const songs = await songRepository.find();
    res.json(songs);
});

app.get("/artists", async (req, res) => {
    const artistRepository = AppDataSource.getRepository(Artist);
    const artists = await artistRepository.find();
    res.json(artists);
});
