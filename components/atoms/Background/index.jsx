import React from 'react'
import styles from "./Background.module.scss";

function Background() {
  return (
    <img className={styles[`BackgroundImg`]} src="images/Homescreen.png"/>
  )
}

export default Background