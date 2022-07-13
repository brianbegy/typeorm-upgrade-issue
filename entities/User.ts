import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    OneToMany,
} from "typeorm";
import { Photo } from "./Photo";

@Entity()
@Unique("inviteCode", ["inviteCode"])
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    firstName!: string;

    @Column()
    lastName!: string;

    @Column()
    age!: number;

    @OneToMany(() => Photo, (photo) => photo.user)
    photos!: Photo[];

    @Column()
    inviteCode!: string
}
