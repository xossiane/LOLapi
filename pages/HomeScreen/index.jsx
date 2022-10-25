import Text from "../../components/atoms/Text";
import ButtonNav from "../../components/atoms/ButtonNav";
import HomeScreenBackground from "../../components/molecules/HomescreenBackground";
import NavBar from "../../components/organisms/NavBar";
import styles from "./HomeScreen.module.scss";

export default function HomeScreen() {
  return (
    <div>
      <NavBar></NavBar>
      <HomeScreenBackground></HomeScreenBackground>
      <section className={styles[`HomeScreen__Container`]}>
        <img className={styles[`logo`]} src="images/LOL_logo.png" />

        <ButtonNav className={styles[`buttonNav--mt`]} mt="mt">
          <Text color="white">PLAY FOR FREE</Text>
        </ButtonNav>
      </section>
    </div>
  );
}
