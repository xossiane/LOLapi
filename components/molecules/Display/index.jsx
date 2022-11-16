import React, { useEffect, useState } from 'react'
import Text from '../../atoms/Text'
import styles from './Display.module.scss'
import api from '../../../services/api'
function Display() {
  const [summoner, setSummoner] = useState("")

  useEffect(() => 
  {
    async function loadData(){
      await api.get(`/summoner/${match.params.id}`)
      .then(res => {
        setSummoner(res.data)

      })
      .catch(e => alert("This is an error. Please, try again"))

    }
  }, [])
  return (
    <div className={styles[`Display`]}>
        <section className={styles[`Display__Title`]}>
            <Text color="black" size="ExtraLarge">SUMMONER'S INFORMATION</Text>
        </section>
        <div> ICON </div>
        <section className={styles[`Display__info`]}>
          
         
        {/* TAGS DOS INPUTS */}
    <section className={styles[`Display__info--tag`]}>
    <Text color="black" size="large"> NICKNAME</Text>
    <Text color="black" size="large"> SUM. LEVEL</Text>
    <Text color="black" size="large"> WINS</Text>
    <Text color="black" size="large"> LOSES</Text>
    <Text color="black" size="large"> WIN RATE</Text>
    </section>
       
       {/* RESULTADOS DA API */}

    <section className={styles[`Display__info--input`]}>
    <Text color="black" size="large"> {/* {match.params.id} */}</Text>
    <Text color="black" size="large"> {/* {summoner.summonerLevel} */} {summoner.tier} {summoner.rank}</Text>
    <Text color="black" size="large"> {/* {summoner.wins} */}</Text>
    <Text color="black" size="large"> {/* {summoner.losses} */}</Text>
    <Text color="black" size="large"> {/* {summoner.winRate} */}</Text>
    </section>
    </section>
    </div>
    
  )
}

export default Display