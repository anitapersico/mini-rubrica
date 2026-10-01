# 📇 Mini Rubrica — Progetto di pratica Backend

Piccolo progetto per esercitarmi con Node.js ed Express, prima di passare a progetti con database vero. Una API che gestisce una lista di contatti (nome e telefono), tenuta per ora in memoria (si azzera ogni volta che il server si riavvia).

## 🛠️ Cosa ho fatto, passo per passo

### 1. Creazione del progetto
- `npm init -y` → ha creato il file `package.json`, la "carta d'identità" del progetto: dice come si chiama, quali librerie usa, e definisce eventuali comandi rapidi (script)
- `npm install express` → ha scaricato e installato **Express**, la libreria che semplifica la creazione di un server web con Node.js. Si trova dentro la cartella `node_modules`, creata automaticamente

### 2. Il file `server.js`
È il file principale: quando lo eseguo con `node server.js`, accende un **server** — un programma che resta "in ascolto" e risponde quando qualcuno gli manda una richiesta a un certo indirizzo (es. `http://localhost:3001/contatti`). Dentro ho definito:
- un array di contatti di partenza (i dati, per ora solo in memoria, non in un database)
- quattro **rotte** (endpoint), una per ciascuna operazione CRUD:
  - `GET /contatti` → restituisce tutti i contatti
  - `POST /contatti` → crea un nuovo contatto, leggendo i dati da `req.body`
  - `PUT /contatti/:id` → modifica il contatto con quell'id
  - `DELETE /contatti/:id` → elimina il contatto con quell'id

### 3. Test delle API con Postman
Prima di pensare a un sito vero, ho testato ogni rotta con **Postman**, un programma che permette di "fare finta di essere il frontend" e mandare richieste HTTP a mano:
- Ho scelto il **metodo** giusto per ogni richiesta (GET, POST, PUT, DELETE), corrispondente a come ho scritto le rotte in Express
- Per POST e PUT, ho scritto i dati nel **Body** della richiesta, in formato JSON (es. `{ "nome": "Luca", "telefono": "320-1112233" }`)
- Ho controllato sia il **codice di stato** della risposta (`200` ok, `201` creato, `404` non trovato) sia i **dati restituiti**, per verificare che ogni operazione facesse esattamente quello che doveva

### 4. Versionamento con Git
- `pwd` → mi sono assicurata di essere sempre nella cartella giusta del progetto prima di lanciare comandi
- `git init` → ho iniziato a tracciare le versioni del progetto in questa cartella
- Ho creato un file `.gitignore` con dentro scritto `node_modules`: questa cartella contiene migliaia di file di libreria, troppo pesante da caricare online, e si può sempre ricreare con `npm install` — quindi non ha senso salvarla nella cronologia di Git né caricarla su GitHub
- `git add .` → ho "preparato" tutti i file modificati per essere salvati
- `git commit -m "messaggio"` → ho creato un vero e proprio "salvataggio" nella cronologia del progetto, con una breve descrizione di cosa avevo fatto
- `git push` → ho caricato le modifiche sul repository GitHub collegato

## 🧠 Concetti chiave imparati

- La differenza tra **GET** (leggere dati) e **POST/PUT/DELETE** (creare, modificare, cancellare dati)
- Come leggere parametri dall'indirizzo (`req.params.id`) e dati dal corpo della richiesta (`req.body`)
- Come cercare, modificare e filtrare elementi in un array con `.find()` e `.filter()`
- Perché `node_modules` e i file segreti non vanno mai caricati su GitHub

## 🚀 Come avviarlo

\`\`\`bash
npm install
node server.js
\`\`\`
Il server parte su `http://localhost:3001`
