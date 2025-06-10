const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = 3001

const cors = require('cors')
app.use(cors())

app.get('/api/movie',(req,res) =>{
    const moviePath = path.join(__dirname,'movie.json')
    fs.readFile(moviePath,'utf-8',(err,data)=>{
        if(err){
            return res.status(500).json({ error: 'film verisi okunamadı.' })
        }
        res.json(JSON.parse(data))
    })
})

app.listen(PORT, () => {
   console.log(`Server http://localhost:${PORT}/api/movie adresinde çalışıyor.`)
})