import * as Yup from "yup";

export const firstFormSchema = Yup.object().shape({
  name: Yup.string().required("this field must not be empty"),
  surname: Yup.string().required("this field must not be empty"),
  gender: Yup.string().required("this field must not be empty"),
});

export const secondFormSchema = Yup.object().shape({
  dob: Yup.string()
    .required("this field must not be empty")
    .test("dob", "You must be 18 0r older", function (dob: any) {
      const age =
        Number(new Date(Date.now()).getFullYear()) -
        Number(new Date(dob).getFullYear());
      return age >= 18;
    }),
  occupation: Yup.string().required("this field must not be empty"),
  color: Yup.string().required("this field must not be empty"),
});
