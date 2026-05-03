// Importações: framework Express e Cors 
const express = require('express');
const cors = require('cors');

// Aplicação do servidor
const app = express();

app.use(cors());
app.use(express.json());

// Rota do tipo POST no caminho /api
app.post('/api', (req, res) => {
  const nome = req.body.nome;   
  res.json({
    mensagem: `Olá, ${nome}! Sua requisição foi processada pelo back-end.`
  });
});

// Inicia e mostra o Status do servidor
app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});