import { EntityRepository, Repository } from "typeorm";
import { Song } from "../entity/Song";

@EntityRepository(Song)
export class SongRepository extends Repository<Song> {

  // Método para salvar músicas (salva múltiplas ou uma música)
  async saveSongs(songs: Song[]): Promise<Song[]> {
    return this.save(songs);
  }

  async saveSong(song: Song): Promise<Song> {
    return this.save(song);  // Salva uma única música
  }

  // Método para buscar todas as músicas
  async findAll(): Promise<Song[]> {
    return this.find();
  }

  // Método para buscar uma música pelo ID
 // Método para buscar uma música pelo ID
    async findById(id: number): Promise<Song | undefined> {
        const song = await this.findOne({ where: { id } });
        return song ?? undefined; // Se `song` for `null`, retornamos `undefined`
    }

}
