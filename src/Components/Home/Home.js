import React from "react";
import styles from "../../scss/home.module.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.intro}>
        <div className={styles.leftIntro}>
          <h5>So, you want to travel to</h5> <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={styles.rightIntro}>
          <Link to="destination">
            <button>Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
