const express = require('express');
const app = express();

// get port from configuration file
const port = 3500;

app.get('/',(req,res)=> {console.log(req);res.send(req.baseUrl+"<a href='hi'>Hi</a>")});
app.get('/hi',(req,res)=> res.send("yo"));
app.use(express.static('public'));
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use(function (req, res, next) {
    res.status(404).json("Sorry can't find that!")
  });