import * as yup from "yup";

export const basicSchema = yup.object().shape({
  name: yup.string().required("Required").min(3, "Too short"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  birth: yup
    .date()
    .required("Required")
    .test("age", "You must be 18 or older", function (birthdate) {
      const cutoff = new Date();
      cutoff.setFullYear(cutoff.getFullYear() - 18);
      return birthdate <= cutoff;
    }),
  driver_licence: yup.date().required("Required "),
  kilometres: yup.number().required("Required"),
  date: yup
    .date()
    .required("Required")
    .nullable()
    .default(undefined)
    .transform((v) => (v instanceof Date && !isNaN(v) ? v : null)),
});
