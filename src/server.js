// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando bibliotec express
const server = express()
server
    //utilizar body do req
    .use(express.urlencoded({ extended: true }))

    //utilizando os arquivos estaticos
    .use(express.static('public'))

    // configurar tamplate engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // rotas da aplicação
    .get('/', pages.index)
    .get('/host2', pages.host2)
    .get('/host', pages.host)
    .get('/create-host', pages.createHost)
    .post('/save-host2', pages.saveHost2)

// ligar o servidor
server.listen(5500)