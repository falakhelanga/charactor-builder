import { useState } from "react";

export const useHandleForm1 = () => {
  const [step, setStep] = useState(1);
  const [charInfo, setCharInfo] = useState({
    name: "",
    surname: "",
    gender: "",
    dob: "",
    occupation: "",
    color: "#5fa8d3",
  });

  const handleForm1 = (name: string, surname: string, gender: string) => {
    setCharInfo((currState) => ({ ...currState, name, surname, gender }));
  };

  const handleForm2 = (dob: string, occupation: string, color: string) => {
    setCharInfo((currState) => ({ ...currState, dob, occupation, color }));
  };
  const handleNext = () => {
    setStep((currStep) => currStep + 1);
  };

  const handleBack = () => {
    setStep((currStep) => currStep - 1);
  };

  const handleEdit = (value: number) => {
    setStep(value);
  };

  return {
    charInfo,
    step,
    handleForm1,
    handleForm2,
    handleNext,
    handleBack,
    handleEdit,
  };
};
