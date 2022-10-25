import React from 'react'
import ButtonNav from '../../atoms/ButtonNav';
import Text from '../../atoms/Text';
import styles from "./NavBar.module.scss";

function NavBar() {
  return (
        <div className={styles[`NavBar`]}>
            <img className={styles[`NavBar--imgRiot`]} href="https://www.riotgames.com/pt-br" src="images/RIOTlogo.png"/>
            <img className={styles[`NavBar--imgLogo`]} href="https://universe.leagueoflegends.com/pt_BR/" src="images/LOL_logomini.png"/>
        <section className={styles[`NavBar--items`]}>
          <li>
            <a href="/">
                <Text color="white" size="large">ABOUT</Text>
            </a>
          </li>
          <li>
            <a href="/">
            <Text color="white" size="large">CHAMPIONS</Text>
            </a>
          </li>
          <li>
            <a href="/"><Text color="white" size="large">NEWS</Text></a>
          </li>
          <li>
            <a href="/"><Text color="white" size="large">PROFILE</Text></a>
          </li>
          </section>

          <ButtonNav><Text color="white" size="medium">PLAY NOW</Text></ButtonNav>
        </div>
    
)}

export default NavBar