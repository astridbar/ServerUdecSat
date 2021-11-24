import dotenv from 'dotenv';
import { Pool } from 'pg';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}


export const isProduction = process.env.NODE_ENV === 'production'

export const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`


export const pool = new Pool({
  connectionString: isProduction ? 
  process.env.DATABASE_URL : connectionString,
  ssl: {
    rejectUnauthorized: false,
    
},

})
console.log(connectionString);