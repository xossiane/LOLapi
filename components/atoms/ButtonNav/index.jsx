import styles from "./Button.module.scss";
import Text from '../Text/index.jsx'

export default function ButtonNav({ mt, className, children }) {
        const classList = [];
        classList.push(styles[`buttonNav--${mt}`]);
        classList.push(styles[`buttonNav`]);
        



  return (<button className={`${classList.join(" ")} ${className}`} >{children}</button>)
  
}
