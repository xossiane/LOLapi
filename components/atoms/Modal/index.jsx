import React from "react";
import styles from "./Modal.module.scss";
import Text from "../Text";
import ButtonNav from "../ButtonNav";
export const Modal = ({ modalIsOpen, setIsOpen }) => {
  return (
    <>
      {modalIsOpen ? (
        <div className={styles[`Modal`]}>
          <Text size="large">GET IN</Text>
          <Text> summoner's name</Text>
          <section className={styles[`Modal__selector`]}>
            <input className={styles[`Modal__input`]} placeholder="type your summoner's name"></input>
            <ButtonNav><Text color="white" size="large">BR <button className={styles[`button`]}><Text color="white" size="large">▼</Text></button></Text></ButtonNav>
          </section>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
