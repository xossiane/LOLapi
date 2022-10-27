import {React, useState }from 'react'


import ButtonNav from '../../atoms/ButtonNav';
import DropDown from '../../atoms/DropDown';
import Text from '../../atoms/Text';
import styles from "./NavBar.module.scss";
import { NavItens } from './NavItens.js'

function NavBar() {
    const [dropDown, setDropDown] = useState(false);
  return (
  <>
        <nav className={styles[`NavBar`]}>
            
            <img className={styles[`NavBar--imgRiot`]} href="https://www.riotgames.com/pt-br" src="images/RIOTlogo.png"/>
            
            
            <img className={styles[`NavBar--imgLogo`]}  href="https://universe.leagueoflegends.com/pt_BR/" src="images/LOL_logomini.png"/>
            
        <section className={styles[`NavBar--items`]} >
          
          <ul className={styles[`NavBar--items`]}>
            {NavItens?.map((item) => {
              if (item.title === "ABOUT"){
                return(
                <li key={item.id} className={item.cName} onMouseEnter={() => setDropDown(true)}  onMouseLeave={() => setDropDown(false)}>
                 
                <Text color="white" size="large" >{item.title}</Text>
                {dropDown && <DropDown/>}
                
              </li>);
              }

              return(
              <li key={item.id} className={item.cName} >
                <Text color="white" size="large">{item.title}</Text>
              </li>

              
              )
              
              
              })}
          </ul>
      
          </section>

          <ButtonNav><Text color="white" size="medium">PLAY NOW</Text></ButtonNav>
          
        </nav>
        
        
        </>
        
    
)}

export default NavBar