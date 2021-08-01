import Pant from "../pant/index";
import styles from "../../styles/Charector.module.scss";
import Head from "../head";
import Body from "../body";
import CharectorDetails from "../character-details";
import { Values } from "../../interface/index";
import { FC } from "react";

type CharectorProps = Values;

const Charector: FC<CharectorProps> = ({ values }) => {
  return (
    <div className={styles.container}>
      <div className={styles.charContainer}>
        <Head values={values} />
        <Body values={values} />
        <Pant values={values} />
      </div>
      <CharectorDetails values={values} />
    </div>
  );
};
export default Charector;
