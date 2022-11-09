import Text from "../../components/atoms/Text";
import ButtonNav from "../../components/atoms/ButtonNav";
import HomeScreenBackground from "../../components/molecules/HomescreenBackground";
import NavBar from "../../components/organisms/NavBar";
import styles from "./HomeScreen.module.scss";
import { useState } from "react";
import Modal from "../../components/atoms/Modal";



export default function HomeScreen() {
  

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(){
    console.log("this is true")
    setIsOpen(prev => !prev);
    
  }
  

  return (
    <div>
      <NavBar></NavBar>
      <HomeScreenBackground></HomeScreenBackground>
      <section className={styles[`HomeScreen__Container`]}>
        <img className={styles[`logo`]} src="images/LOL_logo.png" />

        <ButtonNav className={styles[`buttonNav--mt`]} mt="mt" onClick={openModal}>
          <Text color="white"  >GET IN</Text>
        </ButtonNav>
       <Modal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>
        
      </section>
      
    </div>
  );
}
