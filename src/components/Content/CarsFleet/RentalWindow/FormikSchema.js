import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  birth: yup.date().required("Required birth date"),
  driver_licence: yup.date().required("Required driver licence date"),
  kilometres: yup.number().required("Required"),
  date: yup
    .date()
    .required("Required date")
    .nullable()
    .default(undefined)
    .transform((v) => (v instanceof Date && !isNaN(v) ? v : null)),
});
