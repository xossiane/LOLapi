import styles from "./NavBar.module.scss";
import { useState } from 'react'


const Burguer = () => {
    const [open, isOpen] = useState(false);
    return (
      <div className={styles[`Burguer`]} open={open} onClick={() => setOpen(!open)}>
        <div className={styles[`Burguer--line`]}/>
        <div className={styles[`Burguer--line`]} />
        <div className={styles[`Burguer--line`]} />
      </div>
    )
  }

  export default Burguer 