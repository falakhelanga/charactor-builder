import { FC } from "react";
import Button from "../button";
import { Formik } from "formik";
import FormGroup from "../formgroup";
import classes from "../../styles/Form1.module.scss";
import { firstFormSchema } from "../../formik-utils/validationSchema";
import { firstForminitialvalues } from "../../formik-utils/initialValues";
import { motion } from "framer-motion";
import { Values, Methods } from "../../interface/index";

interface HandleForm1 {
  handleForm1: any;
}
type Form1Props = Values & Methods & HandleForm1;

const Form1: FC<Form1Props> = ({ handleNext, handleForm1, values }) => {
  const initialvalues = firstForminitialvalues(values);
  const onSubmitHandler = (values: any) => {
    handleForm1(values.name, values.surname, values.gender);

    handleNext();
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
      className={classes.container}
    >
      <Formik
        validationSchema={firstFormSchema}
        onSubmit={onSubmitHandler}
        initialValues={initialvalues}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <form onSubmit={handleSubmit}>
            <FormGroup
              value={values.name}
              label="Name"
              name="name"
              handleChange={handleChange}
              type="text"
            />
            <FormGroup
              value={values.surname}
              label="Surname"
              name="surname"
              handleChange={handleChange}
              type="text"
            />
            <div className={classes.radioBtnContainer}>
              <div className={classes.radioBtnLabel}>Select your gender</div>
              <div>
                <label htmlFor="male">Male</label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={values.gender === "male" ? true : false}
                  onChange={handleChange}
                />
                <label htmlFor="female" className={classes.female}>
                  Female
                </label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={values.gender === "female" ? true : false}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className={classes.submitBtn}>
              <Button
                background="#5fa8d3"
                type="submit"
                handleClick={handleNext}
              >
                next
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </motion.div>
  );
};

export default Form1;
