import Charector from "../components/charector";
import Confirm from "../components/confirm";
import Form1 from "../components/form1/index";
import Form2 from "../components/form2/index";
import { useState } from "react";
import styles from "../styles/Home.module.scss";
import { useHandleForm1 } from "../hooks/FormHooks";

export default function Home() {
  const {
    step,
    charInfo,
    handleBack,
    handleEdit,
    handleForm1,
    handleForm2,
    handleNext,
  } = useHandleForm1();

  switch (step) {
    case 1:
      return (
        <div className={styles.container}>
          <Form1
            values={{
              name: charInfo.name,
              surname: charInfo.surname,
              gender: charInfo.gender,
              occupation: charInfo.occupation,
              color: charInfo.color,
              dob: charInfo.dob,
            }}
            handleNext={handleNext}
            handleForm1={handleForm1}
          />
        </div>
      );
    case 2:
      return (
        <div className={styles.container}>
          <Form2
            values={{
              dob: charInfo.dob,
              occupation: charInfo.occupation,
              color: charInfo.color,
            }}
            handleForm2={handleForm2}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        </div>
      );
    case 3:
      return (
        <div className={styles.container}>
          <Confirm
            values={charInfo}
            handleNext={handleNext}
            handleBack={handleBack}
            handleEdit={handleEdit}
          />
        </div>
      );
    case 4:
      return (
        <div className={styles.container}>
          <Charector values={charInfo} />
        </div>
      );
    default:
      return (
        <div className={styles.container}>
          <Form1
            handleNext={handleNext}
            values={{
              name: charInfo.name,
              surname: charInfo.surname,
              gender: charInfo.gender,
            }}
            handleForm1={handleForm1}
          />
        </div>
      );
  }
}
