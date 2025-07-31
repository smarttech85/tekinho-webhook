
const express = require('express');
const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
  const text = (req.body.message || '').toLowerCase();
  const name = req.body.name || 'cliente';
  let reply = '';

  if (/oi|olá|bom dia|boa tarde|boa noite/.test(text)) {
    reply = `Bom dia, ${name}! Sou o Tekinho 🤖 e farei seu atendimento. Pode me chamar quando quiser 😉`;
  } else if (/manuten|conserto|tela|arrumar|problema/.test(text)) {
    reply = `Você está falando de manutenção, certo? Me conta o que está acontecendo com seu aparelho que já te ajudo!`;
  } else if (/venda|celular|preço|capinha|película|comprar/.test(text)) {
    reply = `Temos ótimos preços em celulares e acessórios 📱. Me diz o que está procurando que eu te mostro!`;
  } else if (/tim|chip|plano|internet|recarga/.test(text)) {
    reply = `Legal! Aqui é ponto autorizado da TIM. Posso ajudar com chip, recarga ou plano. Qual você deseja?`;
  } else {
    reply = `Não entendi bem 😅. Pode me explicar de outro jeito?`;
  }

  res.json({ message: reply });
});

app.listen(process.env.PORT || 3000);
