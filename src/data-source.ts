import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import { User } from "./Entities/user.entity";
import { Annoucement } from "./Entities/annoucement.entity";
import { Image } from "./Entities/image.entity";
import { Address } from "./Entities/addresses.entity";
import { Users1681571634616 } from "./Migrations/1681571634616-Users";
import { Comments } from "./Entities/comments.entity";
import { Patchentitys1681913638373 } from "./Migrations/1681913638373-Patchentitys";
import { Patchcascade1681917830974 } from "./Migrations/1681917830974-Patchcascade";

const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: ["src/Entities/*.ts"],
      }
    : {
        type: "postgres",
        host: process.env.PGHOST,
        port: parseInt(process.env.PGPORT!),
        username: process.env.PGUSER,
        password: process.env.PGPASSWORD,
        database: process.env.PGDATABASE,
        logging: true,
        synchronize: false,
        entities: [User, Annoucement, Image, Address, Comments],
        migrations: [
          Users1681571634616,
          Patchentitys1681913638373,
          Patchcascade1681917830974,
        ],
      }
);

export default AppDataSource;
