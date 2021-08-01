import { FC } from "react";
import classes from "../../styles/FormGroup.module.scss";
import { SketchPicker } from "react-color";
import { Field } from "formik";

interface FormGroupProps {
  type: string;
  name: string;
  label: string;
  handleChange: any;
  value: string;
  options?: any;
}

const FormGroup: FC<FormGroupProps> = ({
  name,
  type,
  handleChange,
  label,
  value,
  options,
}) => {
  switch (type) {
    case "text":
      return (
        <div className={classes.inputGroup}>
          <input
            required
            autoComplete="off"
            value={value}
            type="text"
            name={name}
            onChange={handleChange}
          />
          <label htmlFor={name} className={classes.labelName}>
            <span className={classes.contentName}>{label}</span>
          </label>
        </div>
      );
    case "select":
      return (
        <div className={classes.selectContainer}>
          <label htmlFor={name}>
            {label}

            <select name={name} onChange={handleChange} value={value}>
              {options.map((option: any) => (
                <option value={option.value} key={option.value}>
                  {option.key}
                </option>
              ))}
            </select>
          </label>
        </div>
      );
    case "date":
      return (
        <div className={classes.dateContainer}>
          <label htmlFor={name} className={classes.labelName}>
            <span className={classes.contentName}>{label}</span>
          </label>
          <input
            value={value}
            type="date"
            name={name}
            onChange={handleChange}
          />
        </div>
      );

    case "color":
      return (
        <div>
          <Field name={name}>
            {({ form, field }: any) => {
              const { setFieldValue } = form;
              const { value } = field;
              return (
                <SketchPicker
                  color={value}
                  onChange={(updatedColor: any) =>
                    setFieldValue(name, updatedColor?.hex)
                  }
                />
              );
            }}
          </Field>

          <label htmlFor={name} className={classes.labelName}>
            <span className={classes.contentName}>{label}</span>
          </label>
        </div>
      );
    default:
      return (
        <div className={classes.inputGroup}>
          <input
            value={value}
            type={type}
            name={name}
            onChange={handleChange}
          />
          <label htmlFor={name} className={classes.labelName}>
            <span className={classes.contentName}>{label}</span>
          </label>
        </div>
      );
  }
};

export default FormGroup;
