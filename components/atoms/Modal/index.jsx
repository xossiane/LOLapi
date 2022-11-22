import React, { useState } from "react";
import styles from "./Modal.module.scss";
import Text from "../Text";
import ButtonNav from "../ButtonNav";
import Link from "next/link";
import axios from "axios";
import { getPlayerPUUID } from "../../../proxyServer.js"

export const Modal = ({ modalIsOpen, setIsOpen}) => {
  const [summoner, setSummoner] = useState("");
  
  const [info, setInfo] = useState([]);
  /*const API_KEY = "RGAPI-03bed577-e85d-45a0-9b24-86652abcfbb3";
  
function searchForPlayer(event){
//Set up the correct API call
var APICallString = "https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ summoner + "?api_key=" + API_KEY

//Handle the API call
axios.get(APICallString).then(function(response){
  //Sucess
  console.log(response)
}).catch(function(error){
  console.log(error)

})
} */

function getData(e){
  axios.get("http://localhost:3000/Summoner")
  .then(function (response){
    getPlayerPUUID(response.data)
  }).catch(function(error){
    console.log(error)
  })
}


  return (
    <>
      {modalIsOpen ? (
        <div className={styles[`Modal`]}>
          <button
            onClick={(e) => setIsOpen((prev) => !prev)}
            className={styles[`Modal__btn`]}
          >
            <Text size="large">✖</Text>
          </button>
          <div className={styles[`Modal__title`]}>
            <Text size="60 rem" style="italic">
              GET IN
            </Text>
          </div>

          <section className={styles[`Modal__selector`]}>
            <form className={styles[`Modal__input--position`]}>
              <Text size="medium" className={styles[`Modal__input--label`]}>
                {" "}
                summoner's name
              </Text>
              <input
                className={styles[`Modal__input`]}
                placeholder="type your summoner's name"
                onChange={e => setSummoner(e.target.value)}
              ></input>
            </form>
            <ButtonNav className={styles[`Modal__input--server`]}>
              <Text color="white" size="large">
                BR{" "}
                <button className={styles[`button`]}>
                  <Text color="white" size="large">
                    ▼
                  </Text>
                </button>
              </Text>
            </ButtonNav>
          </section>
          <Link href={"/Summoner"}>
          <ButtonNav mt="mt" className={styles[`Modal__input--btn`]} onClick={e => getData(e)}>
            <Text color="white">SEARCH</Text>
          </ButtonNav>
          </Link>
        </div>
        
       
      ) : null}
      
    </>
  );
};

export default Modal;
