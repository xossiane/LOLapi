import styles from "./Button.module.scss";

export default function ButtonNav({ mt, className, children, onClick }) {
        const classList = [];
        classList.push(styles[`buttonNav--${mt}`]);
        classList.push(styles[`buttonNav`]);
        



  return (<button className={`${classList.join(" ")} ${className}`} onClick={(onClick)} >{children}</button>)
  
}
