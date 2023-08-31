import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().required("Required").min(3, "Too short"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  birth: yup.date().required("Required"),
  driver_licence: yup.date().required("Required "),
  kilometres: yup.number().required("Required"),
  date: yup
    .date()
    .required("Required")
    .nullable()
    .default(undefined)
    .transform((v) => (v instanceof Date && !isNaN(v) ? v : null)),
});
