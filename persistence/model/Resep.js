const db = require("../../config/db")
const ResepQuery = require("../Query/ResepQuery")

class Resep {
    static async getAllResep() {
        return new Promise((resolve, reject) => {
            db.query(ResepQuery.QueryGetAllResep, [], (error, result) => {
                if (!error) {
                    const resep = [];
                    let currentResepId = null;
                    let currentResep = null;
    
                    result.rows.forEach(row => {
                        if (row.id !== currentResepId) {
                            currentResepId = row.id;
                            currentResep = {
                                id: row.id,
                                nama_resep: row.nama_resep,
                                saran_penyajian: row.saran_penyajian,
                                langkah_masak: row.langkah_masak,
                                jml_alat: row.jml_alat,
                                alat_masak: [],
                                estimasi: row.estimasi,
                                personalisasi: [],
                                bahanUtama: [],
                                bahanTambahan: [],
                            };
                            resep.push(currentResep);
                        }

                        if (!currentResep.alat_masak.includes(row.alat_masak)) {
                            currentResep.alat_masak.push(row.alat_masak);
                        }
                        if (!currentResep.personalisasi.includes(row.nama_personalisasi)) {
                            currentResep.personalisasi.push(row.nama_personalisasi);
                        }
                        
                        const existingBahanUtama = currentResep.bahanUtama.find(b => b.nama_tag === row.nama_tag);
                        const existingBahanTambahan = currentResep.bahanTambahan.find(b => b.nama_tag === row.nama_tag);
                        if (existingBahanUtama) {
                            existingBahanUtama.jumlah += row.jumlah;
                        }
                        else if (existingBahanTambahan){
                            existingBahanTambahan.jumlah += row.jumlah;
                        }
                        else{
                        const bahan = {
                            nama_tag: row.nama_tag,
                            jumlah: row.jumlah,
                            satuan: row.satuan,
                            tipe_bahan: row.tipe_bahan,
                        };
    
                        if (row.tipe_bahan === 1) {
                            currentResep.bahanUtama.push(bahan);
                        } else {
                            currentResep.bahanTambahan.push(bahan);
                        }
                        }
                    });
    
                    resolve(resep);
                } else {
                    reject(error);
                }
            });
        });
    }
    

    static async getResepById(req) {
        const param = req.query;
        const id = param.id;
        const queryStr = ResepQuery.QueryGetResepById;
        const values = [id];

        return new Promise((resolve, reject) => {
            db.query(queryStr, values, (error, result) => {
                if (!error) {
                    const resep = [];
                    let currentResepId = null;
                    let currentResep = null;
    
                    result.rows.forEach(row => {
                        if (row.id !== currentResepId) {
                            currentResepId = row.id;
                            currentResep = {
                                id: row.id,
                                nama_resep: row.nama_resep,
                                saran_penyajian: row.saran_penyajian,
                                langkah_masak: row.langkah_masak,
                                jml_alat: row.jml_alat,
                                alat_masak: [],
                                estimasi: row.estimasi,
                                personalisasi: [],
                                bahanUtama: [],
                                bahanTambahan: [],
                            };
                            resep.push(currentResep);
                        }

                        if (!currentResep.alat_masak.includes(row.alat_masak)) {
                            currentResep.alat_masak.push(row.alat_masak);
                        }
                        if (!currentResep.personalisasi.includes(row.nama_personalisasi)) {
                            currentResep.personalisasi.push(row.nama_personalisasi);
                        }
                        
                        const existingBahanUtama = currentResep.bahanUtama.find(b => b.nama_tag === row.nama_tag);
                        const existingBahanTambahan = currentResep.bahanTambahan.find(b => b.nama_tag === row.nama_tag);
                        if (existingBahanUtama) {
                            existingBahanUtama.jumlah += row.jumlah;
                        }
                        else if (existingBahanTambahan){
                            existingBahanTambahan.jumlah += row.jumlah;
                        }
                        else{
                        const bahan = {
                            nama_tag: row.nama_tag,
                            jumlah: row.jumlah,
                            satuan: row.satuan,
                            tipe_bahan: row.tipe_bahan,
                        };
    
                        if (row.tipe_bahan === 1) {
                            currentResep.bahanUtama.push(bahan);
                        } else {
                            currentResep.bahanTambahan.push(bahan);
                        }
                        }
                    });
    
                    resolve(resep);
                } else {
                    reject(error);
                }
            });
        });
    }

    static async getResepByPersonalisasi(req) {
        const { id } = req.query;
        const ids = id.split(',').map(Number);
        const queryStr = ResepQuery.QueryGetResepByPersonalisasi;
        const values = [ids];

        return new Promise((resolve, reject) => {
            db.query(queryStr, values, (error, result) => {
                if (!error) {
                    const resepMap = new Map(); // Gunakan Map untuk menghindari duplikasi berdasarkan id resep
                    result.rows.forEach(row => {
                        const resepId = row.id;
                        if (!resepMap.has(resepId)) {
                            const resep = {
                                id: resepId,
                                nama_resep: row.nama_resep,
                                saran_penyajian: row.saran_penyajian,
                                langkah_masak: row.langkah_masak,
                                jml_alat: row.jml_alat,
                                alat_masak: [],
                                estimasi: row.estimasi,
                                personalisasi: [],
                                bahanUtama: [],
                                bahanTambahan: [],
                            };
                            resepMap.set(resepId, resep);
                        }
    
                        const resep = resepMap.get(resepId);
                        if (!resep.alat_masak.includes(row.alat_masak)) {
                            resep.alat_masak.push(row.alat_masak);
                        }
                        if (!resep.personalisasi.includes(row.nama_personalisasi)) {
                            resep.personalisasi.push(row.nama_personalisasi);
                        }

                        const existingBahanUtama = resep.bahanUtama.find(b => b.nama_tag === row.nama_tag);
                        const existingBahanTambahan = resep.bahanTambahan.find(b => b.nama_tag === row.nama_tag);
                        if (existingBahanUtama) {
                            existingBahanUtama.jumlah += row.jumlah;
                        }
                        else if (existingBahanTambahan){
                            existingBahanTambahan.jumlah += row.jumlah;
                        }
                        else{
                        const bahan = {
                            nama_tag: row.nama_tag,
                            jumlah: row.jumlah,
                            satuan: row.satuan,
                            tipe_bahan: row.tipe_bahan,
                        };
    
                        if (row.tipe_bahan === 1) {
                            resep.bahanUtama.push(bahan);
                        } else {
                            resep.bahanTambahan.push(bahan);
                        }
                        }
                    });
    
                    const resepArray = Array.from(resepMap.values()); // Mengubah Map menjadi array hasil
                    resolve(resepArray);
                } else {
                    reject(error);
                }
            });
        });
    }

    static async getResepBySearchBahan(req) {
        const { nama_bahan } = req.query;
        const ids = nama_bahan.split(',');
        const queryStr = ResepQuery.QueryGetResepBySearchBahan;
        const values = [ids];

        return new Promise((resolve, reject) => {
            db.query(queryStr, values, (error, result) => {
                if (!error) {
                    const resepMap = new Map(); // Gunakan Map untuk menghindari duplikasi berdasarkan id resep
                    result.rows.forEach(row => {
                        const resepId = row.id;
                        if (!resepMap.has(resepId)) {
                            const resep = {
                                id: resepId,
                                nama_resep: row.nama_resep,
                                saran_penyajian: row.saran_penyajian,
                                langkah_masak: row.langkah_masak,
                                jml_alat: row.jml_alat,
                                alat_masak: [],
                                estimasi: row.estimasi,
                                personalisasi: [],
                                bahanUtama: [],
                                bahanTambahan: [],
                            };
                            resepMap.set(resepId, resep);
                        }
    
                        const resep = resepMap.get(resepId);
                        if (!resep.alat_masak.includes(row.alat_masak)) {
                            resep.alat_masak.push(row.alat_masak);
                        }
                        if (!resep.personalisasi.includes(row.nama_personalisasi)) {
                            resep.personalisasi.push(row.nama_personalisasi);
                        }

                        const existingBahanUtama = resep.bahanUtama.find(b => b.nama_tag === row.nama_tag);
                        const existingBahanTambahan = resep.bahanTambahan.find(b => b.nama_tag === row.nama_tag);
                        if (existingBahanUtama) {
                            existingBahanUtama.jumlah += row.jumlah;
                        }
                        else if (existingBahanTambahan){
                            existingBahanTambahan.jumlah += row.jumlah;
                        }
                        else{
                        const bahan = {
                            nama_tag: row.nama_tag,
                            jumlah: row.jumlah,
                            satuan: row.satuan,
                            tipe_bahan: row.tipe_bahan,
                        };
    
                        if (row.tipe_bahan === 1) {
                            resep.bahanUtama.push(bahan);
                        } else {
                            resep.bahanTambahan.push(bahan);
                        }
                        }
                    });
    
                    const resepArray = Array.from(resepMap.values()); // Mengubah Map menjadi array hasil
                    resolve(resepArray);
                } else {
                    reject(error);
                }
            });
        });
    }

}

module.exports = Resep