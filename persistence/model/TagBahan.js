const db = require("../../config/db")




class TagBahan {

    static async getAllTagBahan() {
        return new Promise((resolve, reject) => {
          db.query("SELECT * FROM tagbahan", [], (error, result) => {
            if (!error) {
              resolve(result.rows);
            } else {
              reject(error);
            }
          });
        });
      }
    
    static async getTagBahanById(req) {
        const param = req.query;
        const id = param.id;
        const queryStr = "SELECT * FROM tagbahan WHERE id = $1";
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

module.exports = TagBahan