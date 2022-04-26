import { Client } from 'pg'

const database = new Client({
    user: "postgres", 
    host: "localhost",
    database: "users_db_api",
    password: "postgres",
    port: 5432
})


export const startDatabase = async () => {
    await database.connect();
  };
  
  export default database;
  