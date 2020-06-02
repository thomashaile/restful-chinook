const db = require('../db-connection');

const controllers = {
    getAll: (req, res) => {

        const sql = `SELECT * FROM playlists ORDER BY PlaylistId DESC`;

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
        const sql = `SELECT * FROM playlists WHERE PlaylistId = ${id}`;
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
        const newList = req.body;
        const sql = `INSERT INTO playlists (PlaylistId,Name)
    VALUES(${newList.id},'${newList.name}')`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json("New play list created successfully...")
        });
    },
    update: (req, res) => {
        // read row data from body
        const id = req.params.id;
        const newList = req.body;
        const sql = `UPDATE playlists SET Name ='${newList.name}' WHERE PlaylistId = ${id}`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
            res.json("Play list record updated.....")
        });
    },
    delete: (req, res) => {
        const id = req.params.id;
        const sql = `DELETE FROM playlists WHERE PlaylistId = ${id}`;
        db.all(sql, (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }

            res.json("Play List Successfully Deleted")
        });
    }
}

module.exports = controllers;