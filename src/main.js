import express from "express"
import path from "path"

const app = express()

const PORT = process.env.PORT || 5600

const PUBLIC_PATH = process.env.PUBLIC_PATH || path.resolve(process.cwd(), `public`)

app.use(express.json())

app.set('view engine', 'ejs')
app.use(express.static(PUBLIC_PATH))

app.get('/', function(req, res) {
    res.render('index', {title:'Base page',date: new Date().toLocaleString()})
})

import queriesRoute from './route/queries.mjs' 

app.use('/q', queriesRoute)

app.listen(PORT,()=>{
    console.log('RESSOURCES')
    console.log("http://getskeleton.com/")
    console.log('https://icons.getbootstrap.com/')

    console.log(`server listen at http://localhost:${PORT}`)
})