const express = require('express')
const cors = require('cors')
const app = express()
const {getHouses,createHouses,deleteHouses,updateHouses}= require('./controller')
app.use(express.json())
app.use(cors())


app.get('/api/houses',getHouses)
app.post('/api/houses',createHouses)
app.delete('/api/houses/:id',deleteHouses)
app.put('/api/houses/:id',updateHouses)

const SERVER_PORT = 4004

app.listen(SERVER_PORT,()=> console.log(`server running on ${SERVER_PORT})`))