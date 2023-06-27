const resep = require("../persistence/model/Resep")

class ResepController {


    static async getAllResep(req, res) {
        console.log("berhasil3")
        var results = await resep.getAllResep();
        console.log("berhasil4")

        if (results) {
            res.send(results);
        }
    }

    static async getResepById (req, res) {
        console.log("berhasil3")
        var results = await resep.getResepById(req);
        console.log("berhasil4")

        if (results) {
            res.send(results);
        }
    }

    static async getResepByPersonalisasi (req, res) {
        console.log("berhasil3")
        var results = await resep.getResepByPersonalisasi(req);
        console.log("berhasil4")

        if (results) {
            res.send(results);
        }
    }

    static async getResepBySearchBahan (req, res) {
        console.log("berhasil3")
        var results = await resep.getResepBySearchBahan(req);
        console.log("berhasil4")

        if (results) {
            res.send(results);
        }
    }

}

module.exports = ResepController