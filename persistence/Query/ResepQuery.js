const express = require("express")

class ResepQuery {
    static QueryGetAllResep = `
    SELECT resep.id, resep.nama_resep, resep.saran_penyajian, resep.langkah_masak, resep.estimasi, resep.jml_alat,
    alatmasak.alat_masak, 
    bahan.jumlah, bahan.satuan, bahan.tipe_bahan, 
    tagBahan.nama_tag, 
    personalisasi.nama_personalisasi 
    FROM resep 
    JOIN bahan ON resep.id = bahan.resep_id 
    JOIN tagBahan ON bahan.tagBahan_id = tagBahan.id 
    JOIN resep_personalisasi ON resep.id = resep_personalisasi.resep_id
    JOIN personalisasi ON resep_personalisasi.personalisasi_id = personalisasi.id
    JOIN resep_alatmasak ON resep.id = resep_alatmasak.resep_id
    JOIN alatmasak ON resep_alatmasak.alatmasak_id = alatmasak.id
    GROUP BY
    resep.id,
    resep.nama_resep,
    resep.saran_penyajian,
    resep.langkah_masak,
    resep.estimasi,
    resep.jml_alat,
    alatmasak.alat_masak,
    bahan.jumlah,
    bahan.satuan,
    bahan.tipe_bahan,
    tagBahan.nama_tag,
    personalisasi.nama_personalisasi`

    static QueryGetResepById = `
    SELECT resep.id, resep.nama_resep, resep.saran_penyajian, resep.langkah_masak, resep.estimasi, resep.jml_alat, 
    alatmasak.alat_masak, 
    bahan.jumlah, bahan.satuan, bahan.tipe_bahan,
    tagBahan.nama_tag, 
    personalisasi.nama_personalisasi 
    FROM resep 
    JOIN bahan ON resep.id = bahan.resep_id 
    JOIN tagBahan ON bahan.tagBahan_id = tagBahan.id 
    JOIN resep_personalisasi ON resep.id = resep_personalisasi.resep_id
    JOIN personalisasi ON resep_personalisasi.personalisasi_id = personalisasi.id
    JOIN resep_alatmasak ON resep.id = resep_alatmasak.resep_id
    JOIN alatmasak ON resep_alatmasak.alatmasak_id = alatmasak.id
    WHERE resep.id = $1
    Group by
    resep.id,
    resep.nama_resep,
    resep.saran_penyajian,
    resep.langkah_masak,
    resep.estimasi,
    resep.jml_alat,
    alatmasak.alat_masak,
    bahan.jumlah,
    bahan.satuan,
    bahan.tipe_bahan,
    tagBahan.nama_tag,
    personalisasi.nama_personalisasi`

    static QueryGetResepByPersonalisasi = `
    SELECT resep.id, resep.nama_resep, resep.saran_penyajian, resep.langkah_masak, resep.estimasi, resep.jml_alat, 
    alatmasak.alat_masak, 
    bahan.jumlah, bahan.satuan, bahan.tipe_bahan,
    tagBahan.nama_tag, 
    personalisasi.nama_personalisasi 
    FROM resep 
    JOIN bahan ON resep.id = bahan.resep_id 
    JOIN tagBahan ON bahan.tagBahan_id = tagBahan.id 
    JOIN resep_personalisasi ON resep.id = resep_personalisasi.resep_id
    JOIN personalisasi ON resep_personalisasi.personalisasi_id = personalisasi.id
    JOIN resep_alatmasak ON resep.id = resep_alatmasak.resep_id
    JOIN alatmasak ON resep_alatmasak.alatmasak_id = alatmasak.id
    WHERE personalisasi.id = $1
    Group by
    resep.id,
    resep.nama_resep,
    resep.saran_penyajian,
    resep.langkah_masak,
    resep.estimasi,
    resep.jml_alat,
    alatmasak.alat_masak,
    bahan.jumlah,
    bahan.satuan,
    bahan.tipe_bahan,
    tagBahan.nama_tag,
    personalisasi.nama_personalisasi`
}




module.exports = ResepQuery
