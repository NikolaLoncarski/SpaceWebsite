import { useGlobalContext } from "../Context/Context";
import styles from "../../scss/TechnologyBuble.module.scss";
function TechnologyBuble({ setActiveDot, name }) {
  const { dataInfo, setStatus } = useGlobalContext();

  const FilteredCrew = () =>
    dataInfo
      .map((e) => e.technology)
      .flat(2)
      .map((e, i) => {
        const reference = e.name;
        return (
          <li
            style={
              e.name === name
                ? { backgroundColor: "#fff" }
                : {
                    backgroundColor: "#0b0d17",
                    
                  }
            }
            onClick={(e) => {
              setStatus(reference);
              setActiveDot(e);
            }}
            key={i}
          >
            <p
              style={
                e.name === name
                  ? { color: "#000" }
                  : {
                      color: "#fff",
                    }
              }
            >
              {i + 1}
            </p>
          </li>
        );
      });

  return (
    <ul className={styles.crewDotNav}>
      <FilteredCrew />
    </ul>
  );
}

export default TechnologyBuble;
