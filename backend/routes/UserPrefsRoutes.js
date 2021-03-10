
const mongoose = require('mongoose')
UserPrefs = mongoose.model('user_prefs')

const express = require('express');
const router = express.Router()

const userPrefsController = require('../controller/UserPrefsController')
router.get('/',userPrefsController.baseRoute)

router.get('/get',userPrefsController.getUserPrefs)

router.post('/create',userPrefsController.createUserPrefs)

router.get('/getEach:id', userPrefsController.getEachUserPrefs);

router.put('/userPref/:id/update', userPrefsController.updateUserPref);

// delete
router.delete('/delete/:name', userPrefsController.deleteUserPref);


module.exports = router