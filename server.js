//Inicialização dos componentes
const express = require('express');
var bodyParser = require('body-parser');
var usuarioModulo = require('./modules/UsuarioModulo.js');

const app = express();
const port = process.env.PORT || 5000;

//Biblioteca para ler o corpo da requisição
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Gravar usuário
app.post('/api/usuario', (req, res) => {

  let usuario = req.body;

  //Grava no banco
  usuarioModulo.gravar(usuario);

  res.send({ 
    mesagem: "Usuário gravado" 
  });

});

//Ler usuários
app.get('/api/usuario', (req, res) => {

  let usuarios;

  //Lê os usuários do banco
  usuarioModulo.listaUsuariosBanco((erro, docs) => {
    
    if(erro){
      res.send({ erro: "Erro ao buscar usuários" });
    }

    usuarios = docs;
    res.send(usuarios);

  });
  

});

//Inicia o aplicativo na porta especificada
app.listen(port, () => console.log(`Listening on port ${port}`));
