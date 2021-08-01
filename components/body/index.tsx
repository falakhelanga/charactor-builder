import { FC } from "react";
import classes from "../../styles/Body.module.scss";
import { Values } from "../../interface/index";

const Body: FC<Values> = ({ values }) => {
  switch (values.occupation) {
    case "Chef":
      return (
        <div className={classes.chef}>
          <img src="/images/chef.png" alt="body of the charector" />
        </div>
      );
    case "Yoga Instructor":
      return (
        <div className={classes.container}>
          <img src="/images/yoga.png" alt="body of the charector" />
        </div>
      );
    case "Developer":
      return (
        <div className={classes.container}>
          <img src="/images/developer.png" alt="body of the charector" />
        </div>
      );
    case "Social media influencer":
      return (
        <div className={classes.container}>
          <img src="/images/social-media.png" alt="body of the charector" />
        </div>
      );
    default:
      return (
        <div className={classes.container}>
          <img src="/images/developer.png" alt="body of the charector" />
        </div>
      );
  }
};

export default Body;
