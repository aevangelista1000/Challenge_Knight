const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const app = express();



// Adicionando arquivo de rota no endpoint /knight
const knight = require('./routes/knight.js');

const heroes = require('./heroes/knight.js');

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }))
    app.use('/', knight);

    app.use(function (req, res, next) {

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
        res.setHeader('Access-Control-Allow-Headers', 'content-type');
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });
      
    mongoose
    .connect('mongodb://root:example@127.0.0.1:27017/knightdb?authSource=admin', {
        useNewUrlParser: true
      })
    .then(result => {
        console.log('MongoDB Conectado');
    })
    .catch(error => {
        console.log(error);
    });
  
    router.get('/all', (req, res) => {
        heroes.find()
        .then(heroes => {
            res.json(heroes);
        })
        .catch(error => res.status(500).json(error));
    });

    
    // Atualizando dados de um knight já existente
    router.put('/knight/editar/:id', (req, res) => {
    const novosDados = { nome: req.body.nome,
        idade: req.body.idade,
        armas: req.body.armas,
        atributo: req.body.atributo,
        ataque: req.body.ataque,
        exp: req.body.exp };

    heroes.findOneAndUpdate({ _id: req.params.id }, novosDados, { new: true })
        .then(heroes => {
        res.json(heroes);
        })
        .catch(error => res.status(500).json(error));
    });

    router.delete('/:id', controller.delete);

    
    const http = require('http');

    http.createServer(function(request, response){

        //The following code will print out the incoming request text
        request.pipe(response);

    }).listen(3000, '127.0.0.1');

app.listen(3000,() => console.log('Server ativo na porta 3000'));