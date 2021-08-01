import { FC } from "react";
import classes from "../../styles/Head.module.scss";
import { Values } from "../../interface/index";

type HeadProps = Values;

const Head: FC<HeadProps> = ({ values }) => {
  const age =
    Number(new Date(Date.now()).getFullYear()) -
    Number(new Date(values.dob).getFullYear());
  if (values.gender === "male") {
    if (age > 25) {
      return (
        <div className={classes.container}>
          <img src="/images/old-m-head.png" alt="body of the charector" />
        </div>
      );
    } else {
      return (
        <div className={classes.container}>
          <img src="/images/m-head.png" alt="body of the charector" />
        </div>
      );
    }
  } else {
    if (age > 25) {
      return (
        <div className={classes.container}>
          <img src="/images/old-f-head.png" alt="body of the charector" />
        </div>
      );
    } else {
      return (
        <div className={classes.container}>
          <img src="/images/f-head.png" alt="body of the charector" />
        </div>
      );
    }
  }
};
export default Head;
