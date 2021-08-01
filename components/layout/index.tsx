import { FC } from "react";
import AppBar from "../appbar";
import classes from "../../styles/LayOut.module.scss";

const LayOut: FC = ({ children }) => {
  return (
    <div className={classes.container}>
      <AppBar />
      {children}
    </div>
  );
};

export default LayOut;
