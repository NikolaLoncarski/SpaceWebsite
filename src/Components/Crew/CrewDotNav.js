import { useGlobalContext } from "../Context/Context";
import styles from "../../scss/crewDotNav.module.scss";
function CrewDotNav({ setActiveDot, name }) {
  const { dataInfo, setStatus } = useGlobalContext();

  const FilteredCrew = () =>
    dataInfo
      .map((e) => e.crew)
      .flat(2)
      .map((e, i) => {
        return (
          <li
            style={
              e.name === name
                ? { backgroundColor: "#fff" }
                : {
                    color: "#d0d6f9",
                  }
            }
            onClick={(e) => {
              setStatus(e.target.textContent);
              setActiveDot(e);
            }}
            key={i}
          >
            {e.name}
          </li>
        );
      });

  return (
    <ul className={styles.crewDotNav}>
      <FilteredCrew />
    </ul>
  );
}

export default CrewDotNav;
