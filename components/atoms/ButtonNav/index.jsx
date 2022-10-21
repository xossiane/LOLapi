import styles from "./Button.module.scss";
import Text from '../Text/index.jsx'

export default function ButtonNav({ mt, className, children }) {
        const classList = [];
        classList.push(styles[`buttonNav--${mt}`]);


  return (<button className={`${classList.join(" ")} ${className}`} ><Text>{children}</Text></button>)
  
}
