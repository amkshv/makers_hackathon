import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("enter email"),

  password: Yup.string()
    .min(6, "Must be longer than 6 characters")
    .required("enter password")
});
export default BasicFormSchema;
