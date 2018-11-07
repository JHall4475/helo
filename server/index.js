require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('../server/controller');
const massive = require('massive');
const cors = require('cors');
const session = require('express-session');
const port = 8080;


app.use(cors());
app.use(bodyParser.json());

massive(process.env.DATABASE_STRING)
.then(db => {
    app.set('db', db)
    console.log('Database is Connected you Good Looking Fellow')
})
.catch(err => {
    console.log('Database connection error', err)
})

const checkForAuth = (req, res, next) => {
    if (req.session.user){
        next()
    }
    else {
        res.send( `You don't have permission or you are not logged in`)
    }
}


app.get('/health', (req, res) => {
    return res.send('ok')
})

app.post('/api/register', controller.register)

app.post('/api/login', controller.loginUser)





app.listen(port, function(){
    console.log(`Server is running on port ${port}`)
})