import React, { useState } from "react";
import "../../scss/destination.scss";

import { useGlobalContext } from "../Context/Context";
import DestinationSubNav from "./DestinationSubNav";
export default function Destination() {
  const { dataInfo, destionationStatus, setBackground } = useGlobalContext();

  const [activeBorder, setActiveBorder] = useState(null);

  const Description = () =>
    dataInfo.map((e, i) => {
      const { name, images, description, distance, travel, id } =
        e.destinations[destionationStatus];

      const imageSrc = images.png;

      return (
        <div key={id}>
          <div className="activeElements">
            <h5>01</h5>
            <p>PICK YOUR DESTINATION </p>
            <p> {name}</p>
          </div>
          <div className="destinationFlexContainer" key={id}>
            <img
              className="planetImg"
              key={name}
              src={imageSrc}
              alt={e.crew[destionationStatus].name}
            />
            <div className="description">
              <DestinationSubNav
                activeBorder={activeBorder}
                setActiveBorder={setActiveBorder}
                name={name}
              />

              <h2>{name}</h2>
              <p>{description}</p>

              <div className="whiteLine"></div>
              <div className="subDescription">
                <div className="avgD">
                  <p>Avg. Distance</p>
                  <h5>{distance}</h5>
                </div>

                <div className="astT">
                  <p>Est. Travel Time</p>
                  <h5>{travel}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

  return (
    <div className="destination">
      <Description />
    </div>
  );
}
