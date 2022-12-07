import NextCors from 'nextjs-cors';
var cors = require('cors')
var express = require('express')
const axios = require('axios')

var app = express();
app.use(cors());
const API_KEY = "RGAPI-7f40c53e-61d4-44f5-96b3-3cc530184cf1"


app.listen(4000, function(){
  console.log("server")
}
)