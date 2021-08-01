import Pant from "../pant/index";
import styles from "../../styles/Charector.module.scss";
import Head from "../head";
import Body from "../body";
import CharectorDetails from "../character-details";
import { Values } from "../../interface/index";
import { motion } from "framer-motion";
import { FC } from "react";

type CharectorProps = Values;

const Charector: FC<CharectorProps> = ({ values }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          x: -100,
          opacity: 0,
        },
        visible: {
          x: 0,
          opacity: 1,
          transition: {
            type: "spring",
            duration: 0.1,
            bounce: 0.6,
            damping: 11,
          },
        },
      }}
      className={styles.container}
    >
      <div className={styles.charContainer}>
        <Head values={values} />
        <Body values={values} />
        <Pant values={values} />
      </div>
      <CharectorDetails values={values} />
    </motion.div>
  );
};
export default Charector;
