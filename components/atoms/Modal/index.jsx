import React from "react";
import styles from "./Modal.module.scss";
import Text from "../Text";
import ButtonNav from "../ButtonNav";
export const Modal = ({ modalIsOpen, setIsOpen }) => {
  return (
    <>
      {modalIsOpen ? (
        <div className={styles[`Modal`]}>
          <div className={styles[`Modal__title`]}><Text size="60 rem" style="italic">GET IN</Text></div>
          
          
          <section className={styles[`Modal__selector`]}>
            <form className={styles[`Modal__input--position`]}>
            <Text size="medium" className={styles[`Modal__input--label`]}> summoner's name</Text>
            <input className={styles[`Modal__input`]} placeholder="type your summoner's name"></input>
            
            </form>
            <ButtonNav className={styles[`Modal__input--server`]}><Text color="white" size="large">BR <button className={styles[`button`]}><Text color="white" size="large">▼</Text></button></Text></ButtonNav>
            
          </section>
          <ButtonNav mt="mt" className={styles[`Modal__input--btn`]}><Text color="white">SEARCH</Text></ButtonNav>
          
          
        </div>
      ) : null}
    </>
  );
};

export default Modal;
