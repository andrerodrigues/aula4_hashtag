import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Artist {
  
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  banner: string;

  constructor(name: string, image: string, banner: string) {
    this.name = name;
    this.image = image;
    this.banner = banner;
  }
}
