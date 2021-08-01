import { CharacterInfo } from "../interface/index";

export const firstForminitialvalues = (values: CharacterInfo) => {
  return {
    name: values.name,
    surname: values.surname,
    gender: values.gender,
  };
};

export const secondFormInitialvalues = (values: CharacterInfo) => {
  return {
    dob: values.dob,
    occupation: values.occupation,
    color: values.color,
  };
};
