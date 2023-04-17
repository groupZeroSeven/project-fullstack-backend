import { hashSync } from "bcryptjs";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  OneToMany,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Address } from "./addresses.entity";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  name: string;

  @Column({ length: 50, unique: true })
  email: string;

  @Column({ length: 120 })
  password: string;

  @Column()
  phone: string;

  @Column({ length: 50, unique: true })
  cpf: string;

  @Column({ default: false })
  is_seller: boolean;

  @Column()
  birth_date: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address, { onDelete: "CASCADE" })
  @JoinColumn()
  address: Address;

  @BeforeUpdate()
  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
