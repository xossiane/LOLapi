import React from 'react'
import Text from '../../atoms/Text'
import styles from './Display.module.scss'
function Display() {
  return (
    <div className={styles[`Display`]}>
        <section className={styles[`Display__Title`]}>
            <Text color="black" size="ExtraLarge">SUMMONER'S INFORMATION</Text>
        </section>
        <section className={styles[`Display__info`]}>
        {/* TAGS DOS INPUTS */}
    <section className={styles[`Display__info--tag`]}>
    <Text color="black" size="large"> NICKNAME</Text>
    <Text color="black" size="large"> SUM. LEVEL</Text>
    <Text color="black" size="large"> WINS</Text>
    <Text color="black" size="large"> LOSES</Text>
    </section>
       
       {/* RESULTADOS DA API */}

    <section className={styles[`Display__info--input`]}>
    <Text color="black" size="large"> NICKNAME</Text>
    <Text color="black" size="large"> SUM. LEVEL</Text>
    <Text color="black" size="large"> WINS</Text>
    <Text color="black" size="large"> LOSES</Text>
    </section>
    </section>
    </div>
    
  )
}

export default Display