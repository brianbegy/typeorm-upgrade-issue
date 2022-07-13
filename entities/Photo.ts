import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";

@Entity()
export class Photo {
  @PrimaryGeneratedColumn("increment")
  id!: number;
  @Column()
  name!: string;
  @Column()
  description!: string;
  @Column()
  filename!: string;
  @Column()
  views!: number;
  @Column()
  isPublished!: boolean;
  @ManyToOne(() => User, (user) => user.photos)
  user!: User;
}
