import React from 'react'
import styles from './Summoner.module.scss'
import NavBar from '../../components/organisms/NavBar'
import Display from '../../components/molecules/Display'

function SummonerPage() {
  return (
    <>
    <img className={styles[`Background`]} alt="Main Background" src="images/BackgroundSummoner.png"/>
    <NavBar></NavBar>
    <Display></Display>
    </>
  )
}

export default SummonerPage