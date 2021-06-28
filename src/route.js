const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const route = express.Router()
const RoomController = require('./controllers/RoomController')

route.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
route.get('/create-pass', (req, res) => res.render("index", {page: 'create-pass'}))

route.get('/room/:room', (req, res) => res.render("room"))

// Formato que o formulario de dentro da modal tem que passar a informação. 
route.post('/room/:room/:question/:action', QuestionController.index)
route.post('/room/create-room', RoomController.create) 

module.exports = route