/* var express = require('express');
var cors = require('cors');


const axios = require('axios');

var app = express();
app.use(cors());

const API_KEY = "RGAPI-f26729d9-2145-420a-a19f-343c7cdcc5d4";

app.listen(3001, function() {
  console.log("server started on port 3001");
});


async function getPlayerPUUID(playerName) {
  return axios
    .get(
      "https://br1.api.riotgames.com" +
        "summoner/v4/summoners/by-name/" +
        playerName +
        "?api_key=" +
        API_KEY
    )
    .then((response) => {
      console.log(response.data);
      return response.data.puuid;
    }).catch(err => err);
}

app.get("/Summoner", async (req, res) => {
  const playerName = "k33proll1ng";
  //PUUID
  const PUUID = await getPlayerPUUID(playerName)
  const API_CALL = "https://americas.api.riotgames.com" + "/lol/match/v5/by-puuid" + PUUID + "/ids" + "?api_key=" +
  API_KEY

  //get API_CALL
  //its going to give us a list of game IDs
  const gameIDs = await axios.get(API_CALL)
    .then(response => response.data)
    .catch(err => err)
    //list of game ID strings

console.log(gameIDs);

  //loop through game IDs
  //at each loop, get the information based off ID - API CALL -
  var matchDataArray = [];
  for(var i = 0; i < gameIDs.lenght - 15; i++){
    const matchID = gameIDs[i];
    const matchData = await axios.get("https://americas.api.riotgames.com" + "lol/match/v5/matches/" + matchID + "?api_key=" +
    API_KEY)
    .then(response => response.data)
    .catch(err => err)
    matchDataArray.push(matchData)


  }
  //save information above in an array, give array as JSON response to user
  res.json(matchDataArray);
  

});


 */