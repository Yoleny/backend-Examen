const express = require('express')
const logsRouter = require('./router/LogsRouter');


const app= express();

app.use(express.json())

var port = 5000;

app.use('/logs',logsRouter)


app.post('/registros', (req, res) => {
  const { positionX, positionY } = req.body;
  const fecha = new Date();
  const query = `INSERT INTO logs (positionX, positionY, fecha) VALUES (?, ?, ?)`;
  db.query(query, [positionX, positionY, fecha], (err, results) => {
    if (err) {
      console.error('error:', err);
      res.status(500).send({ message: 'Error al registrar' });
    } else {
      res.send({ message: 'Registro exitoso' });
    }
  });
});

app.get('/logs', (req, res) => {
  const query = 'SELECT * FROM logs';
  db.query(query, (err, results) => {
    if (err) {
      console.error('error:', err);
      res.status(500).send({ message: 'Error al obtener registros' });
    } else {
      res.send(results);
    }
  });
});

app.listen(port,()=>{
    console.log('Ejecutando en puerto', port)
})

