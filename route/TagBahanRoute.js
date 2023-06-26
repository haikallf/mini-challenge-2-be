const express = require("express")
const router = require("express").Router();

const tagBahanController = require("../controller/TagBahanController")


router.get("/all-tag-bahan", tagBahanController.getAllTagBahan);
router.get("/tag-bahan-by-id", tagBahanController.getTagBahanById);


module.exports = router