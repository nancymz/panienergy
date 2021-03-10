
const mongoose = require('mongoose')
require('./model/UserPrefs')

require('dotenv').config({path:'.env'})

mongoose.connect(process.env.DATABASE,{
    useUnifiedTopology:true,
    useNewUrlParser: true
})
//mongoose.Promise=global.Promise
mongoose.connection.on('error',(err) =>{
    console.error(`Database Connection Error ${err.message}`)
})

const { MongoServerSelectionError } = require('mongodb');


const app = require('./app');
const server = app.listen(3001,function(){
    console.log('Backend Node Server running on 3001')
})