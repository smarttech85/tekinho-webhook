const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor Tekinho está online!');
});

app.post('/webhook', (req, res) => {
  console.log('Webhook recebido:', req.body);
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
