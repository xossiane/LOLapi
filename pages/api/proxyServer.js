import NextCors from 'nextjs-cors';
const express = require('express')
const app = express()
const cors = require("cors");

app.use(cors({
  origin: 'http://127.0.0.1:3000',
}))


app.get('/', (req, res) => {
  res.send('Who is anybody?')
})


async function handler(req, res) {
   // Run the cors middleware
   // nextjs-cors uses the cors package, so we invite you to check the documentation https://github.com/expressjs/cors
   const API_KEY = "RGAPI-a90bb6fd-129c-42a7-9fdb-4e1d86c7632d";
   await NextCors(req, res, {
      // Options
      methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
      origin: 'https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/k33proll1ng?api_key=RGAPI-a90bb6fd-129c-42a7-9fdb-4e1d86c7632d',
      optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
   });

   // Rest of the API logic
   res.json("origin");
}

export default handler