const express = require('express');
const app = express();
app.use(express.static('public'))
app.set('view engine', 'ejs')
let active = " "
app.get('/', function (req, resp) {
    active=' active'
    resp.render('index',{active})
})
app.get('/Presentes', function (req, resp) {
    active=' active'
    resp.render('Presentes',{active})
})
app.get('/Utilidades', function (req, resp) {
    active=' active'
    resp.render('Utilidades',{active})
})



app.listen(process.env.PORT ||3000, ()=>{
    console.log("Servidor executando em:Porta 3000, http://localhost:3000")
})