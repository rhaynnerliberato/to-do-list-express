const express = require('express')
const checkListRouter = require('./src/routes/checklist')
require('./config/database')


const app = express()

//middleware json
app.use(express.json())

app.use('/checklist', checkListRouter)

app.listen(3000, () => {
    console.log('Servidor iniciado!')
})