const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()

const connection=mongoose.connect(process.env.ATLAS_URI)
.then((db)=>{
    console.log("Database Connected");
    return db
}).catch((err)=>{
    console.log(err);
})

module.exports=connection