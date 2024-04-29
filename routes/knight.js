const express = require('express');
const router = express.Router();
controller = express.Router('../controller/controller');
const heroes = require('../heroes/knight');

// Retorna um array com todos os documentos do banco de dados
//router.get('/', function (req, res) { //endereco da requisicao onde e retornado hello world
//  res.send("teste")
//})


router.get('/all', (req, res) => {
  heroes.find()
    .then(heroes => {
      res.json(heroes);
   })
    .catch(error => res.status(500).json(error));
});

router.get('/:id', (req, res) => {
  //res.send("Ola Mundo! ID")
  heroes.findById(req.params.id)
    .then(heroes => {
      res.json(heroes);
   })
    .catch(error => res.status(500).json(error));
});

router.post('/knight/novo', function(req, res) {
  //res.send('Olá Mundo!')
  //res.send(req.body)

  const age = req.body.idade 
  const exper = Math.floor(age-7) * Math.pow(22, 1.45)
       
  const novoknight = new heroes({
    nome: req.body.nome,
    idade: req.body.idade,
    armas: req.body.armas,
    atributo: req.body.atributo,
    ataque: req.body.ataque,
    exp: exper
  });

  novoknight
    .save()
    .then(result => {
      res.json(result);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});


// Atualizando dados de um knight já existente
router.put('/knight/editar/:id', (req, res) => {
  const age = req.body.idade 
  const exper = Math.floor(age-7) * Math.pow(22, 1.45)

  const novosDados = { nome: req.body.nome,
    idade: req.body.idade,
    armas: req.body.armas,
    atributo: req.body.atributo,
    ataque: req.body.ataque,
    exp: exper };

  heroes.findOneAndUpdate({ _id: req.params.id }, novosDados, { new: true })
    .then(heroes => {
      res.json(heroes);
    })
    .catch(error => res.status(500).json(error));
});


// Deletando um knight do banco de dados
router.delete('/knight/delete/:id', (req, res) => {
  //res.send("Olá mundo (delete)!")
  heroes.findOneAndDelete({ _id: req.params.id })
    .then(heroes => {
      res.json(heroes);
    })
    .catch(error => res.status(500).json(error));
});


module.exports = router;