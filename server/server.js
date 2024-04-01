const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')
const fileupload = require('express-fileupload');
app.use(fileupload());
app.use(express.static('assets'))
const path = require('path');
app.use('/assets',express.static(path.join(__dirname,'assets')));
const corsOptions = {
       origin: 'http://localhost:3000',
       methods: 'GET,POST,PUT,DELETE',
       Credentials:true, 
    }
app.use(cors( corsOptions))
require('./utils/db')
const authRoute = require('./router/auth-router')
const contactRoute = require('./router/contact-router')
const serviceRoute = require('./router/services-router')
const adminRoute =require('./router/admin-router')
/* let's define client  routh */
app.use('/api/auth',authRoute)
app.use('/api/form',contactRoute)
app.use('/api/data',serviceRoute)

/* let's define admin routh */
app.use('/api/admin',adminRoute)

// app.use('./api/admin',adminRoute)
// app.use('./api/admin',adminRoute)
// app.use('./api/admin',adminRoute)





/* app.get('/',(req, res) =>{
    res.send('this is our first class of express')
})
app.get('/about',(req, res) =>{
    res.send('this is about page 6')
})
app.get('/contact',(req, res) =>{
    res.send('this is contact page')
})
app.get('/login',(req, res) =>{
    res.send('this is login page')
})
app.post('/register',(req,res) =>{
    res.send('we are creating data')
}) */

app.listen(9000, ()=>{
    console.log('server is running on the port 9000')
})