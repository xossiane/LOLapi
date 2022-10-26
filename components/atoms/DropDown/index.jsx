import {React, useState }from 'react'
import { DropdownItems } from '../../organisms/NavBar/NavItens'
import Text from '../Text'
import styles from "./DropDown.module.scss";

function DropDown() {
    const [dropDown, setDropDown] = useState(false);

  return (
    <>
    <ul className={dropDown ? "DropDown--subitems clicked" : `$styles['DropDown--subitems']`} onClick={() => setDropDown(!dropDown)}>
        {DropdownItems.map(item => {
            return (
                <li key={item.id} className={styles[`DropDown--subitems`]}>
                <Text color="white" size="large" onClick={() => setDropDown(false)}>{item.title}</Text>
            
              </li>
            )
        })}
    </ul>
    </>
  )
}

export default DropDown