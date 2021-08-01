import { FC } from "react";
import Button from "../button";
import ConfirmItem from "../confirm-item";
import classes from "../../styles/Confirm.module.scss";
import { Methods, Values } from "../../interface/index";
import {motion} from 'framer-motion'

type ConfirmProps = Methods & Values;

const Confirm: FC<ConfirmProps> = ({
  handleNext,
  handleBack,
  handleEdit,
  values,
}) => {
  const goToStep = () => {
    handleEdit(1);
  };
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
      className={classes.wrapper}
    >
      <ConfirmItem
        field="Name"
        name={values.name}
        handleEdit={handleEdit}
        step={1}
      />
      <ConfirmItem
        field="Surname"
        name={values.surname}
        handleEdit={handleEdit}
        step={1}
      />
      <ConfirmItem
        field="gender"
        name={values.gender}
        handleEdit={handleEdit}
        step={1}
      />
      <ConfirmItem
        field="Date of birth"
        name={new Date(values.dob).toLocaleDateString()}
        handleEdit={handleEdit}
        step={2}
      />
      <ConfirmItem
        field="Occupation"
        name={values.occupation}
        handleEdit={handleEdit}
        step={2}
      />
      <ConfirmItem
        field="color"
        name={values.color}
        handleEdit={handleEdit}
        step={2}
      />
      <div className={classes.buttons}>
        <Button background="#5fa8d3" type="button" handleClick={handleNext}>
          next
        </Button>
        <div className={classes.backBtn}>
          <Button background="#232121" type="button" handleClick={handleBack}>
            back
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Confirm;
