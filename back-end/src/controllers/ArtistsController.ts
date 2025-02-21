import express, {Request, Response} from "express";
import { AppDataSource } from "../data-source";
import { Artist } from "../entity/Artist";
import {artistArray} from "../data/artists";

const router = express.Router();

//Lista todos os artistas
router.get("/artists", async (req: Request, res: Response) => {
    try {
        const artistRepository = AppDataSource.getRepository(Artist);
        const artists = await artistRepository.find();
        res.status(200).json(artists);
    } catch (error) {
        res.status(500).json({
            message:"Erro ao listar usuário!"
        })
    }
});

//Salva todos os artistas
router.post("/artists", async (req: Request, res: Response) => {
    try {
        const artistRepository = AppDataSource.getRepository(Artist);
        await artistRepository.save(artistArray);
        res.status(201).json({
            message: "Artistas salvos com sucesso!"
        });
    } catch (error) {
        res.status(500).json({
            message: "Erro ao salvar artistas!"
        });
    }
});

//deleta todos os artistas
router.delete("/artists", async (req: Request, res: Response) => {
    try {
        const artistRepository = AppDataSource.getRepository(Artist);
        await artistRepository.clear(); // Remove todos os registros da tabela
        
        res.status(200).json({
            message: "Todos os artistas foram deletados com sucesso!"
        });
    } catch (error) {
        res.status(500).json({
            message: "Erro ao deletar artistas!"
        });
    }
});


export default router;