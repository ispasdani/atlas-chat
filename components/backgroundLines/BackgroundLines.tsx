import React from "react";
import styles from "@/components/backgroundLines/styles.module.scss";

const BackgroundLines = () => {
  const repetitions = 7; // Adjust the total repetitions of the pattern
  const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="#adb5bd" d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z"/></svg>`;

  const myArray = Array.from({ length: repetitions }, () => svgCode);

  return (
    <div className={styles.lines}>
      <div className={styles.line1}>
        {myArray.map((svg, index) => (
          <div
            key={index}
            className="bg-white dark:bg-black z-10"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ))}
      </div>
      <div className={styles.line2}>
        {myArray.map((svg, index) => (
          <div
            key={index}
            className="bg-white dark:bg-black z-10"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ))}
      </div>
      <div className={styles.line3}>
        {myArray.map((svg, index) => (
          <div
            key={index}
            className="bg-white dark:bg-black z-10"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ))}
      </div>
      <div className={styles.line4}>
        {myArray.map((svg, index) => (
          <div
            key={index}
            className="bg-white dark:bg-black z-10"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ))}
      </div>
      <div className={styles.line5}>
        {myArray.map((svg, index) => (
          <div
            key={index}
            className="bg-white dark:bg-black z-10"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundLines;
