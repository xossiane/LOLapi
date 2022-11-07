import styles from "./Button.module.scss";
import Text from '../Text/index.jsx'
import Link from "next/link"
export default function ButtonNav({ mt, className, children, props }) {
        const classList = [];
        classList.push(styles[`buttonNav--${mt}`]);
        classList.push(styles[`buttonNav`]);
        



  return (<button className={`${classList.join(" ")} ${className}`} onClick={(props)} >{children}</button>)
  
}
