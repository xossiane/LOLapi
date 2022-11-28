import React from 'react'
import styles from "./Background.module.scss";

function Background() {
  return (
    <>
    <img className={styles[`BackgroundImg`]} alt="nexus blitz background" src={"images/Homescreen.png"}/>
    <svg className={styles[`frame`]} width="1223" height="527" viewBox="0 0 1223 527" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1221 525H2V2H1168.62L1221 58.6112V525Z" stroke="#B7B7B7" strokeWidth="3"/>
</svg>

    </>
  )
}

export default Background