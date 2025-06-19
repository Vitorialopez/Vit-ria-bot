const express = require('express');
const { create } = require('@wppconnect-team/wppconnect');

const app = express();
const port = process.env.PORT || 3000;

create().then((client) => {
  client.onMessage(async (message) => {
    if (message.body.toLowerCase().includes('quero ganhar dinheiro')) {
      await client.sendText(
        message.from,
        '🚀 Olá! Sou a Vitória, e posso te mostrar como criar renda online em até 30 dias. Clique aqui: https://pay.kiwify.com.br/sUqnazH?afid=uYUz279Y'
      );
    }
  });
});

app.get('/', (req, res) => res.send('IA Vitória rodando!'));
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
