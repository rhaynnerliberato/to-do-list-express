const mongoose = require('mongoose')
mongoose.Promisse = global.Promisse

mongoose.connect('mongodb://localhost/to-do-list', { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => console.log('Conectado ao MongoDB')).catch((err) => console.error(err))

