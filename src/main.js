import express from "express"

const app = express()

const PORT = process.env.PORT || 5600

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
    res.render('index', {title:'Base page',date: new Date().toLocaleString()})
})

app.listen(PORT,()=>{
    console.log(`server listen at http://localhost:${PORT}`)
})