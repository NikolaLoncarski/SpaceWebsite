import React, { useState } from "react";
import styles from "../../scss/crew.module.scss";

import { useGlobalContext } from "../Context/Context";
import CrewDotNav from "./CrewDotNav";

export default function Crew() {
  const { dataInfo, destionationStatus } = useGlobalContext();

  const [activeDot, setActiveDot] = useState(null);

  const Description = () =>
    dataInfo.map((e, i) => {
      const { name, images, role, bio, id } = e.crew[destionationStatus];

      const imageSrc = images.png;

      return (
        <section className={styles.flexCrewSection} key={id}>
          <div className={styles.crewFlexContainer}>
            <div className={styles.sectionIntro}>
              <h5>02</h5>
              <p>MEET YOUR CREW</p>
            </div>
            <div className={styles.crewInfo}>
              <h4> {role}</h4>
              <h3>{name}</h3>
              <p>{bio}</p>
            </div>
            <CrewDotNav
              activeDot={activeDot}
              setActiveDot={setActiveDot}
              name={name}
            />
          </div>
          <div className={styles.imgContainer}>
            <img src={imageSrc} alt={e.crew[destionationStatus].name} />
          </div>
        </section>
      );
    });

  return (
    <section className={styles.crewSection}>
      <Description />
    </section>
  );
}
