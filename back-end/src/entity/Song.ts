import {
    Entity, PrimaryGeneratedColumn, Column } from "typeorm";
  
  @Entity()
  export class Song {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @Column()
    image: string;
  
    @Column()
    name: string;
  
    @Column()
    duration: string;
  
    @Column()
    artist: string;
  
    @Column()
    audio: string;
  
    // Construtor personalizado
    constructor(
      image: string,
      name: string,
      duration: string,
      artist: string,
      audio: string
    ) {
      this.image = image;
      this.name = name;
      this.duration = duration;
      this.artist = artist;
      this.audio = audio;
    }
  }
  