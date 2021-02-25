const express = require('express')
const mongoose  = require('mongoose')
const auth = require('./middleware/auth')


const app = express()
const PORT = 255

app.use (express.json())
app.use (express.urlencoded({extended: true}))

mongoose
  .connect("mongodb://localhost/todolist", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('mongodb connected'))
  .catch((err) => {
    console.log(err);
  });

app.get('/', (req, res) => {
    res.status(200).json({
      status: 200,
      message: 'todolist service up and running!',
      environment: process.env.NODE_ENV,
      timestamp: new Date(),
    });
  });

//routes
const user = require('./routes/user')
const login = require('./routes/login')
const list = require('./routes/list')

app.post('/user', user.user)
app.post('/login', login.login)
app.post('/dolist', auth.isUser,list.dolist )

app.listen(PORT, console.log(`listening on port ${PORT}`))