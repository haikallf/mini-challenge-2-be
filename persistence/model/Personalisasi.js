const db = require("../../config/db")


class Personalisasi {
    static async getAllPersonalisasi() {
        return new Promise((resolve, reject) => {
          db.query("SELECT * FROM personalisasi", [], (error, result) => {
            if (!error) {
              resolve(result.rows);
            } else {
              reject(error);
            }
          });
        });
      }

      static async getPersonalisasiById(req) {
        const param = req.query;
        const id = param.id;
        const queryStr = "SELECT * FROM personalisasi WHERE id = $1";
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

module.exports = Personalisasi