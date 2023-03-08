import React, { useState, useEffect } from "react";
import "../../scss/technology.scss";
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
          <div className="techIntro">
            <h5>03</h5>
            <span>SPACE LAUNCH 101</span>
          </div>
          <div className="flexTechnology" key={id}>
            <div className="techInfo">
              <TechnologyBuble
                activeDot={activeDot}
                setActiveDot={setActiveDot}
                name={name}
              />
              <div className="techDetails">
                <p>THE TECHNOLOGY</p>
                <h3>{name}</h3>
                <p>{description}</p>
              </div>
            </div>

            <img
              className="planetImg"
              src={imageSrc}
              alt={e.technology[destionationStatus].name}
            />
          </div>
        </>
      );
    });

  return (
    <section className="tech">
      <Description />
    </section>
  );
}
