const db = require('../db-connection');

const controllers = {
    getAll: (req, res) => {

        const sql = `SELECT * FROM tracks`;

        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }

            res.json(rows)
        });
    },
    getOne: (req, res) => {
        const id = req.params.id;
        const sql = `SELECT * FROM tracks WHERE TrackId = ${id}`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }

            res.json(rows)
        });


    },
    create: (req, res) => {
        // read row data from body
        const newTrack = req.body;
        const sql = `INSERT INTO tracks (TrackId,Name,AlbumId,MediaTypeId,GenreId,Composer,Milliseconds,Bytes,UnitPrice)
        VALUES(${newTrack.id},'${newTrack.Name}',${newTrack.album},${newTrack.media},${newTrack.genre},'${newTrack.composer}',${newTrack.duration},${newTrack.bytes},${newTrack.price})`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json("New track added successfully...")
        });
    },
    update: (req, res) => {
        // read row data from body
        const id = req.params.id;
        const newTrack = req.body;
        const sql = `UPDATE tracks SET Name = '${newTrack.Name}', Composer = '${newTrack.composer}', UnitPrice = ${newTrack.price} WHERE TrackId = ${id}`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json("track record updated Successfully...")
        });
    },
    delete: (req, res) => {
        const id = req.params.id;
        const sql = `DELETE FROM tracks WHERE TrackId = ${id}`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }

            res.json("Track Successfully Deleted")
        });

    }
}

module.exports = controllers;