const dotenv = require( 'dotenv');
const { Pool } = require( 'pg');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

 const isProduction = process.env.NODE_ENV === 'production'
 const connectionString = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`


const pool = new Pool({
  connectionString: isProduction ? 
  process.env.DATABASE_URL : connectionString,
  ssl: {
    rejectUnauthorized: false,
    
},

})
console.log(connectionString);

module.exports ={
  isProduction,
  connectionString,
  pool
}