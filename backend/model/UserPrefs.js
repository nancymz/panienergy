
const mongoose = require('mongoose')
mongoose.Promise=global.Promise

const dataSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
       // unique: true,
    },
    isRoot:{
        type:Boolean
    },
    category:{
        type:String
    },
    isParent:{
        type: Boolean,
      //  required: true,
    },
    hasChildren:{
        type:Boolean,
        required: true,
    },
   children:
           [this] 
    ,
    price:{
        type: Number
    }
})
let UserPrefs = mongoose.model('user_prefs',dataSchema)

module.exports = UserPrefs