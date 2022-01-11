require('dotenv').config({path : '../backend/.env'})
let connectMongo = require('./crucial/db')
const express = require('express')
connectMongo()
    .then(()=>{console.log('Connected To Mongo')})
    .catch((e)=>{console.log('Connection Error ' + e)})
const app = express()
const port = 5000

//For Using Post Request
// app.use(express.urlencoded())
//For Using The JSON Request
app.use(express.json())
// All Available Routes
app.get('/', (req, res) => {res.send('Hello World!')})
app.use('/api/auth',require("./routes/auth"));
// app.use('/api/notes',require("./routes/notes"));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
