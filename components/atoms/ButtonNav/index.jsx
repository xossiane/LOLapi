import styles from "./Button.module.scss";
import Text from '../Text/index.jsx'
import Link from "next/link"
export default function ButtonNav({ mt, className, children }) {
        const classList = [];
        classList.push(styles[`buttonNav--${mt}`]);
        classList.push(styles[`buttonNav`]);
        



  return (<Link href="https://play.br.leagueoflegends.com/pt_BR"><button className={`${classList.join(" ")} ${className}`} >{children}</button></Link>)
  
}
