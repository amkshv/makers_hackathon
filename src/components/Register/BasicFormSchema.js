import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("enter email"),

  firstname: Yup.string()

    .min(2, "Must be longer than 2 characters")
    .required("enter first name"),

  lastname: Yup.string()

    .min(2, "Must be longer than 2 characters")
    .required("enter last name"),

  confirmpassword: Yup.string()
    .min(6, "Must be longer than 6 characters")
    .required("enter password"),

  password: Yup.string().when("confirmpassword", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("confirmpassword")],
      "Both password need to be the same"
    )
  })
});
export default BasicFormSchema;
