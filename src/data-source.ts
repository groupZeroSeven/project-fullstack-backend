import "reflect-metadata";
import "dotenv/config";
import { DataSource } from "typeorm";
import { User } from "./Entities/user.entity";
import { Annoucement } from "./Entities/annoucement.entity";
import { Annoucemigration1681138479583 } from "./Migrations/1681138479583-Annoucemigration";
import { banner1681232088826 } from "./Migrations/1681232088826-banner";
import { unique1681232347779 } from "./Migrations/1681232347779-unique";
import { default1681392681078 } from "./Migrations/1681392681078-default";
import { Image } from "./Entities/image.entity";
import { images1681407815375 } from "./Migrations/1681407815375-images";
import { imagesCASCADE1681426545452 } from "./Migrations/1681426545452-imagesCASCADE";

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
        entities: [User, Annoucement, Image],
        migrations: [
          Annoucemigration1681138479583,
          banner1681232088826,
          unique1681232347779,
          default1681392681078,
          images1681407815375,
          imagesCASCADE1681426545452,
        ],
      }
);

export default AppDataSource;
