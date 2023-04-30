import dotenv from 'dotenv';

dotenv.config();

export const db_dialect = 'postgres';
export const db_host = process.env.DB_HOST;
export const db_port = parseInt(process.env.DB_PORT);
export const db_username = process.env.DB_USERNAME;
export const db_password = process.env.DB_PASSWORD;
export const db_database = process.env.DB_NAME;