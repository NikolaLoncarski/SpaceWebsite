import React from "react";
import styles from "../../scss/nav.module.scss";
import Logo from "../../assets/shared/logo.svg";
import { NavLink, Outlet } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";
import SlideMenu from "./SlideMenu";
function Nav() {
  let activeStyle = {
    borderBottom: "2px solid #fff",
  };
  const { setDestionationStatus, setBackground } = useGlobalContext();

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <img src={Logo} alt="logo" />
        </div>

        <SlideMenu />
        <div className={styles.styled_line}></div>
        <div className={styles.links} id="navLinks">
          <NavLink
            style={
              (`${styles.navLink}`,
              ({ isActive }) => (isActive ? activeStyle : undefined))
            }
            to="/"
          >
            <strong>00</strong> Home
          </NavLink>

          <NavLink
            to="destination"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => {
              setDestionationStatus(0);
              setBackground(
                "url(../assets/destination/background-destination-desktop.jpg)"
              );
            }}
          >
            <strong>01</strong> Destination
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="crew"
            onClick={() => {
              setDestionationStatus(0);
              setBackground("url(../assets/crew/background-crew-desktop.jpg");
            }}
          >
            <strong>02</strong> Crew
          </NavLink>

          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="technology"
            onClick={() => {
              setBackground("url(../assets/crew/background-crew-desktop.jpg");
              setDestionationStatus(0);
            }}
          >
            <strong>03</strong> Technology
          </NavLink>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Nav;
