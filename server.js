const app= require('./app')
app.listen(process.env.PORT ||3000, ()=>{
    console.log("Servidor ex'ecutando em:Porta 3000, http://localhost:3000")
})