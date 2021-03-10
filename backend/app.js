const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require("cors");

app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());


const routes = require('./routes/UserPrefsRoutes')
app.use('/',routes)
/*const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name:{
        type: String
    },
    isParent:{
        type: Boolean
    },
    hasChildren:{
        type:Boolean
    },
    children: {
        type: Array
    },
    price:{
        type: Number
    }
})

let UserPrefs = mongoose.model('user_prefs',dataSchema)

app.get('/',(req,res) => {
    res.send('Back end Server running. Request received.')

})

app.get('/getUserPrefs',async(req,res) =>{
    const prefs = await UserPrefs.find()
    res.json(prefs)
})*/

module.exports = app;