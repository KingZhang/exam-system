var jsonServer = require('json-server')

var server = jsonServer.create()

server.use(jsonServer.defaults())
server.use('/applyQuestions', jsonServer.router('src/data/applyQuestions/applyQuestions.json'))
server.use('/questions', jsonServer.router('src/data/questions/questions.json'))
server.use('/score', jsonServer.router('src/data/score/score.json'))

server.listen(3399, function(){
    console.log('Database start port 3399.');
})