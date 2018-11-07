const bcrypt = require('bcrypt-nodejs');



module.exports = {
    
    register: (req,res) => {
        const db = req.app.get('db');
        bcrypt.hash(req.body.password, null, null, (err, hash) => {
            if(err) {
                return res.send('something went wrong during hashing')
            }
            db.add_new_user([req.body.username, hash])
            .then(() => {
                res.status(200).send("Added new user")
            })
            .catch((err) => {
                return res.status(500).send(err)
            })
        })
    },
    loginUser: (req, res) => {
        const db = req.app.get('db')
        db.get_user([req.body.username])
        .then( (user) => {
            bcrypt.compare(req.body.password, user[0].password, function(err, isCorrectPassword) {
                if (err) {
                    return res.send('Error:', err)
                }
                if(isCorrectPassword){
                    req.session.user = user[0]
                    res.send('Login Successful')
                }
                else{
                    res.send('Emaill or Password is wrong')
                }
            })
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    })
 }