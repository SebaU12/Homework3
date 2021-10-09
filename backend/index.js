//Dependencias 
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const PORT = process.env.PORT || 3050;

const app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

// MySQL 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'sebau12',
    password: '123hola',
    database: 'restaurant'
});

// Route
app.get('/menu', (req, res) => {
    const sql = 'SELECT * FROM menu';
    connection.query(sql, (err, result) => {
        if (err) throw err;
        if (result.length > 0) { res.json(result); } else { res.send('No information on database') };
    })
});

// Comprobar conexion 
connection.connect(e => {
    if (e) throw e;
    console.log('Database server running');
})

app.listen(PORT, () => console.log(`Database server running at port ${PORT}`));