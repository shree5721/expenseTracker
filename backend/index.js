const express = require('express');
const app=express()
const cors = require('cors');
const routes=require('./routes/routes.js')
const dotenv = require('dotenv');
const connection = require('./DBConnection/DBconnection.js');

dotenv.config()
const PORT=process.env.PORT || 5000

//Middlewares
app.use(cors())
app.use(express.json())

//Routes
app.use(routes)

connection.then((db)=>{
    if(!db) return process.exit(1)

        app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))

    app.on('error',(err)=>{
        console.log(err)
    })
})




