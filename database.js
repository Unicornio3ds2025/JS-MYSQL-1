const mysql = require('mysql2/promise');

class Database {
    constructor(){
        this.pool = mysql.createPool({
            host: 'localhost',
            user: 'hoot',
            password: '',
            database: 'loja_esportes',
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
    }
    async query(sql, params) {
        try {
            cont [rows] = await this.pool.execute(sql, params);
            return rows;
        }catch( error ) {
            console.log("Erro na query: ", error);
            throw error;
        }
  }
}
module.exports = new Database();