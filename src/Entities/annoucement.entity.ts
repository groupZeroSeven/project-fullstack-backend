import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("annoucements")
export class Annoucement {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 50 })
  brand: string;

  @Column()
  banner: string;

  @Column({ length: 50, unique: true })
  model: string;

  @Column({ length: 120 })
  year: string;

  @Column()
  fuel: string;

  @Column("int")
  mileage: number;

  @Column()
  color: string;

  @Column("decimal", { precision: 10, scale: 2 })
  price: number;

  @Column()
  description: string;

  @Column({ default: false })
  is_bargain: boolean;

  @Column({ default: false })
  is_published: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
