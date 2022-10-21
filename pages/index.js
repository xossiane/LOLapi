import ButtonNav from '../components/atoms/ButtonNav';
import Text from '../components/atoms/Text'
import HomeScreenBackground from '../components/molecules/HomescreenBackground/index.jsx';
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div>
    <Text color="white">hello human</Text>
    <ButtonNav><Text color="white" size="large" className={styles[`ButtonNav_Text`]}>PLAY NOW</Text></ButtonNav>
    
    <HomeScreenBackground></HomeScreenBackground>
    </div>
    
  );
}
