const express = require('express');
const app = express();
const path = require('path');

// getting post routes
const posts = require('./server/routes/posts');

// using a middle ware to acces
app.use(express.static(path.join(__dirname,'dist')));
app.use('/posts',posts);

//sending all requests to the static index html and and recive response

const port = process.env.PORT || 4600;

app.get('*', (req,res) =>{
   res.sendfile(path.join(__dirname,'dist/index.html'))
});

//creating server and listen
app.listen(port,(req,res) =>
{
   console.log(`Running on Port ${port}`);
})