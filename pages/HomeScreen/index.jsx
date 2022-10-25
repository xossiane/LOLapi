


import HomeScreenBackground from "../../components/molecules/HomescreenBackground";
import styles from "./HomeScreen.module.scss";

export default function HomeScreen() {
  return (
    <div>
        <HomeScreenBackground></HomeScreenBackground>
        <img className={styles[`logo`]} src="images/LOL_logo.png"/>

    </div>
    
  );
}
