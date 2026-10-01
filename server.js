const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json()); // permette al server di leggere dati JSON in arrivo

// I nostri "contatti", per ora solo in memoria (array)
let contatti = [
  { id: 1, nome: "Giulia", telefono: "333-1234567" },
  { id: 2, nome: "Marco", telefono: "347-9876543" },
];



//OPERAZIONI CRUD

// GET: restituisce tutti i contatti
app.get('/contatti', (req, res) => {
  res.json(contatti);
});



// POST: crea un nuovo contatto
app.post('/contatti', (req, res) => {
  const nuovoContatto = {
    id: contatti.length + 1,
    nome: req.body.nome,
    telefono: req.body.telefono,
  };

  contatti.push(nuovoContatto);
  res.status(201).json(nuovoContatto);
});



// PUT: modifica un contatto esistente
app.put('/contatti/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const contatto = contatti.find((c) => c.id === id);

  if (!contatto) {
    return res.status(404).json({ messaggio: "Contatto non trovato" });
  }

  contatto.nome = req.body.nome;
  contatto.telefono = req.body.telefono;

  res.json(contatto);
});



// DELETE: cancella un contatto
app.delete('/contatti/:id', (req, res) => {
  const id = parseInt(req.params.id);
  contatti = contatti.filter((c) => c.id !== id);

  res.json({ messaggio: "Contatto eliminato" });
});



app.listen(PORT, () => {
  console.log(`Server avviato su http://localhost:${PORT}`);
});