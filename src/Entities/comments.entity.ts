import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Annoucement } from "./annoucement.entity";

@Entity("comments")
export class Comments {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  text: string;

  @JoinColumn()
  @ManyToOne(() => User, (user) => user.comments, { onDelete: "CASCADE" })
  user: User;

  @JoinColumn()
  @ManyToOne(() => Annoucement, (annoucement) => annoucement.comments, {
    onDelete: "CASCADE",
  })
  announcement: Annoucement;
}
