const db = require("../../config/db")




class Bahan {

    static async getAllBahan() {
        return new Promise((resolve, reject) => {
          db.query("SELECT * FROM bahan", [], (error, result) => {
            if (!error) {
              resolve(result.rows);
            } else {
              reject(error);
            }
          });
        });
      }
    
    static async getBahanById(req) {
        const param = req.query;
        const id = param.id;
        const queryStr = "SELECT * FROM bahan WHERE id = $1";
        const values = [id];
      
        return new Promise((resolve, reject) => {
          db.query(queryStr, values, (error, result) => {
            if (!error) {
              resolve(result.rows);
            } else {
              reject(error);
            }
          });
        });
      }

}

module.exports = Bahan