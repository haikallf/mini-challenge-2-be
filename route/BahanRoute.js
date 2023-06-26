const express = require("express")
const router = require("express").Router();

const bahanController = require("../controller/BahanController")


router.get("/all-bahan", bahanController.getAllBahan);
router.get("/bahan-by-id", bahanController.getBahanById);

module.exports = router