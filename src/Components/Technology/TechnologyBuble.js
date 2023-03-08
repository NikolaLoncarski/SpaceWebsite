import { useGlobalContext } from "../Context/Context";
import "../../scss/TechnologyBuble.scss";
function TechnologyBuble({ setActiveDot, name }) {
  const { dataInfo, setStatus } = useGlobalContext();

  const FilteredCrew = () =>
    dataInfo
      .map((e) => e.technology)
      .flat(2)
      .map((e, i) => {
        const reference = e.name;
        return (
          <button
            style={
              e.name === name
                ? { backgroundColor: "#fff", color: "#000" }
                : {
                    backgroundColor: "#0b0d17",
                    color: "#fff",
                  }
            }
            onClick={(e) => {
              setStatus(reference);
              setActiveDot(e);
            }}
            key={i}
          >
            {i + 1}
          </button>
        );
      });

  return (
    <section className="tech-bubble">
      <FilteredCrew />
    </section>
  );
}

export default TechnologyBuble;
