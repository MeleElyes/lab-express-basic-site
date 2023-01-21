const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : true}))

const port = 8000

app.use(express.static(__dirname));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/views/Home.html");
 })

 app.get('/About',(req,res)=>{
    res.sendFile(__dirname + "/views/About.html");
 })

 app.get('/Works',(req,res)=>{
    res.sendFile(__dirname + "/views/Works.html");
 })

 app.get('/PhotoGallery',(req,res)=>{
    res.sendFile(__dirname + "/views/PhotoGallery.html");
 })



//  app.get('/api/dbz',(req,res)=>{
//     res.send(dbzCharacter)
//  })

//  app.get('/api/dbz',(req,res)=>{
//     res.send(dbzCharacter)
//  })

 app.listen(port, () => {
    console.log(`Server build on port ${port}`)
})