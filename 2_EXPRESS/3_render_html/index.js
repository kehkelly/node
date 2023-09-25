const express = require('express')
const app = express()

const path = require('path')

const caminho = path.join(__dirname, 'templates')

app.get('/', (requisicao, reposta) => {
    reposta.sendFile(`${caminho}/index.html`)
})

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000')
})