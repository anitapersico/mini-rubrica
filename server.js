const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json()); // permette al server di leggere dati JSON in arrivo

// I nostri "contatti", per ora solo in memoria (array)
let contatti = [
  { id: 1, nome: "Giulia", telefono: "333-1234567" },
  { id: 2, nome: "Marco", telefono: "347-9876543" },
];

// GET: restituisce tutti i contatti
app.get('/contatti', (req, res) => {
  res.json(contatti);
});

// POST: crea un nuovo contatto con Postman
app.post('/contatti', (req, res) => {
  const nuovoContatto = {
    id: contatti.length + 1,
    nome: req.body.nome,
    telefono: req.body.telefono,
  };

  contatti.push(nuovoContatto);
  res.status(201).json(nuovoContatto);
});

app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});