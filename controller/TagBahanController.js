const tagBahan = require("../persistence/model/TagBahan")

class TagBahanController {


    static async getAllTagBahan(req, res) {
        console.log("berhasil3")
        var results = await tagBahan.getAllTagBahan();
        console.log("berhasil4")

        if (results) {
            res.send(results);
        }
    }

    static async getTagBahanById (req, res) {
        console.log("berhasil3")
        var results = await tagBahan.getTagBahanById(req);
        console.log("berhasil4")

        if (results) {
            res.send(results);
        }
    }

}

module.exports = TagBahanController