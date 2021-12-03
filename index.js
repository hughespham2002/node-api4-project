require('dotenv').config()

const express = require('express')
const cors = require('cors')


const server = express()

const PORT = process.env.PORT || 9000

server.use(express.json())
server.use(cors())

server.get('/api/Hughes', (req, res)=>{
  res.json({
      message:"Hughes's Api Is Working"
  })
})

server.use('*', (req, res)=>{
    res.send(`<h1> Welcome to Hughes's API! </h1>`)
})




server.use((err, req, res, next)=>{ // eslint-disable line
res.status(500).json({
    message: err.message,
    stack: err.stack,
})
})

server.listen()

server.listen(PORT, ()=>{
    console.log(`listening on ${PORT}`)
})

// saving