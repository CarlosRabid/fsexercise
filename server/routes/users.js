const express = require('express');
const router = express.Router()

const User = require('./models/User');

router.get('/', (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => console.log(err))
})

router.post('/offerings', (req, res) => {
    console.log("post route")
    const { username, email } = req.body;
    console.log(req.body)
    const newUser = new User({
        username: username, email: email
    })
    newUser.save()
        .then(() => res.send({
            message: "Created account successfully"
        }))
        .catch(err => res.status(400).json({
            "error": err,
            "message": "Error creating account"
        }))
})
module.exports = router 