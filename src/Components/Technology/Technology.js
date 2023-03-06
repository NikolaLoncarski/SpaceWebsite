import React, { useState, useEffect } from "react";
import styles from "../../scss/technology.module.scss";
import { useGlobalContext } from "../Context/Context";
import TechnologyBuble from "./TechnologyBuble";

export default function Technology() {
  const { dataInfo, destionationStatus } = useGlobalContext();
  const [activeDot, setActiveDot] = useState(null);

  const [windowSize, setWindowSize] = useState([window.innerWidth]);
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  const Description = () =>
    dataInfo.map((e) => {
      const { name, images, description, id } =
        e.technology[destionationStatus];
      let imageSrc = images.portrait;
      if (windowSize <= 768) {
        imageSrc = images.landscape;
      }

      return (
        <>
          <div className={styles.techIntro}>
            <h5>03</h5>
            <p>SPACE LAUNCH 101</p>
          </div>
          <div className={styles.flexTechnology} key={id}>
            <div className={styles.techInfo}>
              <TechnologyBuble
                activeDot={activeDot}
                setActiveDot={setActiveDot}
                name={name}
              />
              <div className={styles.techDetails}>
                <p>THE TECHNOLOGY</p>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </div>

            <img
              className={styles.planetImg}
              src={imageSrc}
              alt={e.technology[destionationStatus].name}
            />
          </div>
        </>
      );
    });

  return (
    <section>
      <Description />
    </section>
  );
}
