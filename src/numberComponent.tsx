import React from "react";
import { getRandomNumbers } from "./randomService";
const classes = require("./numberComponentStyles.scss");

export const NumberComponent: React.FC = () => {
  const [selectedNumbers, setSelectedNumbers] = React.useState([]);

  React.useEffect(() => {
    setSelectedNumbers(getRandomNumbers(Math.ceil(Math.random() * 5)));
  }, []);

  return (
    <div className={classes.greeting}>
      <span>Today's selected number{selectedNumbers.length === 1 ? ' is' : 's are'} {Array.from(selectedNumbers).join(" - ")}</span>
    </div>
  );
};
