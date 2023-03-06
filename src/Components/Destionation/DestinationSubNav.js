import { useGlobalContext } from "../Context/Context";
import styles from "../../scss/destinationSubNav.module.scss";
function DestinationSubNav({ setActiveBorder, name }) {
  const { dataInfo, setStatus } = useGlobalContext();

  const FilteredDestinations = () =>
    dataInfo
      .map((e) => e.destinations)
      .flat(2)
      .map((e, i) => {
        return (
          <li
            className={styles.subNavItem}
            style={
              e.name === name
                ? { borderBottom: "1px solid white", color: "#fff" }
                : {
                    color: "#d0d6f9",
                  }
            }
            onClick={(e) => {
              setStatus(e.target.textContent);
              setActiveBorder(e);
            }}
            key={i}
          >
            {e.name}
          </li>
        );
      });

  return (
    <ul className={styles.subNav}>
      <FilteredDestinations />
    </ul>
  );
}

export default DestinationSubNav;
