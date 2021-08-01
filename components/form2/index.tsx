import { FC } from "react";
import Button from "../button";
import { Formik } from "formik";
import FormGroup from "../formgroup";
import classes from "../../styles/Form1.module.scss";
import { secondFormSchema } from "../../formik-utils/validationSchema";
import { useState } from "react";
import { occupationOptions as options } from "../../formik-utils/options";
import { Values, Methods } from "../../interface/index";
import { secondFormInitialvalues } from "../../formik-utils/initialValues";

interface HandleForm2 {
  handleForm2: any;
}

type Form2Props = Values & Methods & HandleForm2;

const Form2: FC<Form2Props> = ({
  handleNext,
  handleForm2,
  values,
  handleBack,
}) => {
  const initialvalues = secondFormInitialvalues(values);
  const [showColors, setShowColors] = useState(false);

  const onSubmitHandler = (values: any) => {
    handleForm2(values.dob, values.occupation, values.color);

    handleNext();
  };
  return (
    <div className={classes.container}>
      <Formik
        validationSchema={secondFormSchema}
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
              value={values.dob}
              label="Date of Birth"
              name="dob"
              handleChange={handleChange}
              type="date"
            />
            {errors.dob === "You must be 18 0r older" && (
              <div className={classes.error}>{errors.dob}</div>
            )}
            <FormGroup
              value={values.occupation}
              label="Occupation"
              name="occupation"
              handleChange={handleChange}
              options={options}
              type="select"
            />
            <div>
              <button
                style={{
                  backgroundColor: values.color,
                  boxShadow: `0px 0px 10px ${values.color}`,
                }}
                className={classes.colorBtn}
                type="button"
                onClick={() => {
                  setShowColors((currColor) => !currColor);
                }}
              >
                {showColors
                  ? "Click to Hide the colors of the pant"
                  : "Click to Pick the color of the pant"}
              </button>
              {showColors && (
                <FormGroup
                  value={values.color}
                  label="Pick Color"
                  name="color"
                  handleChange={handleChange}
                  type="color"
                />
              )}
            </div>

            <div className={classes.submitBtn}>
              <Button
                background="#5fa8d3"
                type="submit"
                handleClick={handleNext}
              >
                next
              </Button>
              <div className={classes.backBtn}>
                <Button
                  background="#232121"
                  type="button"
                  handleClick={handleBack}
                >
                  back
                </Button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form2;
