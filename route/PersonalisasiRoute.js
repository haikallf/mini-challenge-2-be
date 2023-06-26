const express = require("express")
const router = require("express").Router();

const personalisasiController = require("../controller/PersonalisasiController")


router.get("/all-personalisasi", personalisasiController.getAllPersonalisasi);
router.get("/personalisasi-by-id", personalisasiController.getPersonalisasiById);

module.exports = router