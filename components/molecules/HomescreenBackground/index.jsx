import React from 'react'
import Background from '../../atoms/Background'
import styles from "./HomeScreenBackground.module.scss";
import HomeScreen from "../../../public/images/HomeScreen.png"


function HomeScreenBackground() {
  return (
    <div>
        <Background src={HomeScreen}>
          
        </Background>
        
        <img className={styles[`Lillia`]} src="images/lillia.png"/>
        

        
        
    </div>
  )
}

export default HomeScreenBackground