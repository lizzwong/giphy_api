
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 

let env = require('dotenv');
env.config();

let giphyRouter = require('./routes/giphy_router');
app.use('/giphy', giphyRouter);


app.use(express.static('server/public'));

const port = 5000;
app.listen(port, function(){
  console.log(`Listening on port ${port}.`);
})