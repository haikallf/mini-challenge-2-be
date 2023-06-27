const express = require("express")
const router = require("express").Router();

const resepController = require("../controller/ResepController")


router.get("/all-resep", resepController.getAllResep);
router.get("/resep-by-id", resepController.getResepById);
router.get("/resep-by-personalisasi", resepController.getResepByPersonalisasi);
router.get("/resep-by-search-bahan", resepController.getResepBySearchBahan);

module.exports = router