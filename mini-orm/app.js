const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs');

// let index = require('./routers/index')
let project = require('./routers/project')
// let supervisor = require('./routers/supervisor')

// app.use('/', index)
app.use('/project', project)
// app.use('/supervisor', supervisor)

app.listen(3000,()=>{
  console.log('Run...Run...Run');
})
