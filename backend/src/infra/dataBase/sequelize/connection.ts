import { Sequelize } from "sequelize";
import { db_database, db_dialect, db_host, db_password, db_port, db_username } from "src/uteis/config";

export const sequelize = new Sequelize({
    dialect: db_dialect,
    host: db_host,
    port: db_port,
    username: db_username,
    password: db_password,
    database: db_database,
  });