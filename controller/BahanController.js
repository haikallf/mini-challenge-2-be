const bahan = require("../persistence/model/Bahan")

class BahanController {


    static async getAllBahan(req, res) {
        console.log("berhasil3")
        var results = await bahan.getAllBahan();
        console.log("berhasil4")

        if (results) {
            res.send(results);
        }
    }

    static async getBahanById (req, res) {
        console.log("berhasil3")
        var results = await bahan.getBahanById(req);
        console.log("berhasil4")

        if (results) {
            res.send(results);
        }
    }
}

module.exports = BahanController