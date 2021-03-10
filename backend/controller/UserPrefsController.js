const mongoose = require('mongoose')
let UserPrefs = mongoose.model('user_prefs')

exports.baseRoute = async (req,res) => {
    res.send('Back end Server running. Request received.')

}

exports.getUserPrefs = async(req,res) =>{
    const prefs = await UserPrefs.find()
    res.json(prefs)
}

exports.createUserPrefs = async (req, res) => {
    console.log(req.body)
    await new UserPrefs(req.body).save((err, data) => {
        
      if (err) {
         // error
        res.status(500).json({
          message:
            "Something went wrong, please try again later.",
        });
      } else {
    
        res.status(200).json({
          message: "User Prefs Created",
          data,
        });
      }
    });
  };

 exports.getEachUserPrefs = async (req, res) => {
  
    let userPrefID = req.params.id;
  
    await UserPrefs.findById({ _id: userPrefID }, (err, data) => {
      if (err) {
        res.status(500).json({
          message:
            "Something went wrong, please try again later.",
        });
      } else {
        console.log(data);      
        res.status(200).json({
          message: "User Pref found",
          data
        });
      }
    });
  };

  exports.updateUserPref = async (req, res) => {

    let userPrefID = req.params.id;
  
    await UserPrefs.findByIdAndUpdate({_id: userPrefID}, {$set : req.body}, (err, data) => {
      if (err) {
        res.status(500).json({
          message:
            "Something went wrong, please try again later.",
        });
      } else {
        res.status(200).json({
          message: "User Pref Updated",
          data,
        });
      }
    });
  }

exports.deleteUserPref = async (req, res) => {
    let userPrefName = req.params.name;

    await UserPrefs.deleteOne({ name: userPrefName }, (err, data) => {
      if (err) {
        res.status(500).json({
          message:
            "Something went wrong, please try again later.",
        });
      } else {
        res.status(200).json({
          message: "User Pref Deleted"
        });
      }
    });
  };