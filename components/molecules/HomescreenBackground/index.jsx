import React from 'react'
import Background from '../../atoms/Background'
import styles from "./HomeScreenBackground.module.scss";


function HomeScreenBackground() {
  return (
    <div>
        <Background>
        
        </Background>
        <img className={styles[`Lillia`]} src="images/lillia.png"/>
        
    </div>
  )
}

export default HomeScreenBackground