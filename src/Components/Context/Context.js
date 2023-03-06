import React, { useContext, useState, useEffect, useRef } from "react";
import Data from "../../data.json";

const dataInfo = [JSON.parse(JSON.stringify(Data))];

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [destionationStatus, setDestinationStatus] = useState(0);
  const [status, setStatus] = useState();
  const windowSize = useRef([window.innerWidth]);
  const filterSatusHandler = () => {
    switch (status) {
      case "Moon":
      case "Douglas Hurley":
      case "Launch vehicle":
        setDestinationStatus(0);
        break;
      case "Mars":
      case "Mark Shuttleworth":
      case "Spaceport":
        setDestinationStatus(1);
        break;
      case "Europa":
      case "Victor Glover":
      case "Space capsule":
        setDestinationStatus(2);
        break;
      case "Titan":
      case "Anousheh Ansari":
        setDestinationStatus(3);
        break;
      default:
        setDestinationStatus(0);

        break;
    }
  };

  useEffect(() => {
    filterSatusHandler();
  }, [filterSatusHandler]);
  return (
    <AppContext.Provider
      value={{
        dataInfo,
        destionationStatus,
        setStatus,
        setDestinationStatus,
        windowSize,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
