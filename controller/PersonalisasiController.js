const personalisasi = require("../persistence/model/Personalisasi")

class PersonalisasiController {


    static async getAllPersonalisasi(req, res) {
        console.log("berhasil3")
        var results = await personalisasi.getAllPersonalisasi();
        console.log("berhasil4")

        if (results) {
            res.send(results);
        }
    }

    static async getPersonalisasiById (req, res) {
        console.log("berhasil3")
        var results = await personalisasi.getPersonalisasiById(req);
        console.log("berhasil4")

        if (results) {
            res.send(results);
        }
    }
}

module.exports = PersonalisasiController