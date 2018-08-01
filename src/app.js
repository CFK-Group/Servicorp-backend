const path = require('path')
const express = require('express')
const app = express()
const morgan = require('morgan') // para mostrar peticiones por consola en modo dev
const bodyParser = require('body-parser')
const cors = require('cors')
const db = require('./middlewares/database')

//settings
const port = process.env.PORT || 3000
app.set('port', port)

// middlewares
app.use(morgan('dev'))
app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use(cors())

// Headers
app.use((req, res, next) => {
    //res.header("Access-Control-Allow-Origin", "*")
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, content-type")

    response.setHeader("Access-Control-Allow-Origin", "*")
    response.setHeader("Access-Control-Allow-Credentials", "true")
    response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")
    next()
})

// static elements
app.use(express.static(path.join(__dirname, 'public')))

// routes
require('./routes/userRoutes')(app)
require('./routes/formularioRoutes')(app)
require('./routes/backoffice')(app)

app.listen(app.get('port'), () => {
    console.log(`Servidor iniciado en el puerto ${port}`)
})

