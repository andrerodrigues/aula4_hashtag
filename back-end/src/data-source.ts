import "reflect-metadata";
import { DataSource } from "typeorm";
import { Artist } from "./entity/Artist";
import { Song } from "./entity/Song";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "spotify.sqlite",
    entities: [Artist, Song],
    synchronize: true,  // Ou false, dependendo de como você prefere controlar as migrações
});
