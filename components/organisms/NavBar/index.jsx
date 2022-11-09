import { React, useState } from "react";
import Link from "next/link";
import ButtonNav from "../../atoms/ButtonNav";
import DropDown from "../../atoms/DropDown";
import Text from "../../atoms/Text";
import styles from "./NavBar.module.scss";
import { NavItens } from "./NavItens.js";

function NavBar() {
  const [dropDown, setDropDown] = useState(false);
  return (
    <>
      <nav className={styles[`NavBar`]}>
        <Link href="https://www.riotgames.com/pt-br">
          <img
            className={styles[`NavBar--imgRiot`]}
            src="images/RIOTlogo.png"
          />
        </Link>
        <Link href="https://universe.leagueoflegends.com/pt_BR/">
          <img
            className={styles[`NavBar--imgLogo`]}
            src="images/LOL_logomini.png"
          />
        </Link>

        <section className={styles[`NavBar--items`]}>
          <ul className={styles[`NavBar--items`]}>
            {NavItens?.map((item) => {
              if (item.title === "ABOUT") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={() => setDropDown(true)}
                    onMouseLeave={() => setDropDown(false)}
                  >
                    <Text color="white" size="large">
                      {item.title}
                    </Text>
                    {dropDown && <DropDown />}
                  </li>
                );
              }

              return (
                <Link as="/Summoner" href={{pathname: '/'}}>
                <li key={item.id} className={item.cName}>
                  <Text color="white" size="large">
                    {item.title}
                  </Text>
                </li>
                </Link>
              );
            })}
          </ul>
        </section>
        <Link href="https://signup.br.leagueoflegends.com/pt/signup/index?_gl=1*wb7452*_ga*MjAyMDEyNDgwMS4xNjY0NTcyMTQ4*_ga_FXBJE5DEDD*MTY2NDU3MjE0OC4xLjAuMTY2NDU3MjE0OC42MC4wLjA.&_ga=2.167845737.913822029.1667850176-2020124801.1664572148#/">
          <ButtonNav>
            <Text color="white" size="medium">
              PLAY NOW
            </Text>
          </ButtonNav>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
