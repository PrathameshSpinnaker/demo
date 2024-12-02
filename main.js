const express = require('express')
const app = express()

const PORT = process.env.PORT || '5174'

app.get('/', (req, res) => {
    return res.json({message:'Hello from My first Docker Image!'})
})

app.listen(PORT, ()=>{
    console.log(`Server is running on: ${PORT}`)
})