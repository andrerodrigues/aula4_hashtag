import express, {Request, Response} from "express";
import { AppDataSource } from "../data-source";
import { Song } from "../entity/Song";
import {songsArray} from "../data/sounds";

const router = express.Router();

//Lista todas as músicas
router.get("/songs", async (req: Request, res: Response) => {
    try {
        const songRepository = AppDataSource.getRepository(Song);
        const songs = await songRepository.find();
        res.status(200).json(songs);
    } catch (error) {
        res.status(500).json({
            message:"Erro ao listar músicas!"
        })
    }
}
);

//Salva todas as músicas
router.post("/songs", async (req: Request, res: Response) => {
    try {
        const songRepository = AppDataSource.getRepository(Song);
        await songRepository.save(songsArray);
        res.status(201).json({
            message: "Músicas salvas com sucesso!"
        });
    } catch (error) {
        res.status(500).json({
            message: "Erro ao salvar músicas!"
        });
    }
});

//deleta todas as músicas
router.delete("/songs", async (req: Request, res: Response) => {
    try { 
        const songRepository = AppDataSource.getRepository(Song);
        await songRepository.clear(); // Remove todos os registros da tabela
        
        res.status(200).json({
            message: "Todas as músicas foram deletadas com sucesso!"
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Erro ao deletar músicas!"
        });
    }
});

export default router;