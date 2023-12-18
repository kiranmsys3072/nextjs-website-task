import * as yup from "yup";

var passwordRules = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

export const basicSChema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  number: yup
    .string()
    .min(10, "Phone Number Only contain 10 numbers")
    .max(10, "Phone Number Only contain 10 numbers")
    .required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a strong password" })
    .required("Required"),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password must Match")
    .required("Required"),

  country: yup.string().required("Required"),
  pincode: yup
    .string()
    .when("country", {
      is: "india",
      then: yup
        .string()
        .min(6, "India pincode must be 6 characters")
        .max(6, "India pincode must be 6 characters")
        .required("Required"),
    })
    .when("country", {
      is: "usa",
      then: yup
        .string()
        .min(5, "USA Pincode must be 5 characters")
        .max(5, "USA pincode must be 5 characters")
        .required("Required"),
    })
    .when("country", {
      is: "srilanka",
      then: yup
        .string()
        .min(3, "srilanka Pincode must be 3 characters")
        .max(3, "srilanka pincode must be 3 characters")
        .required("Required"),
    })
    .when("country", {
      is: "china",
      then: yup
        .string()
        .min(2, "China Pincode must be 2 characters")
        .max(2, "China pincode must be 2 characters")
        .required("Required"),
    }),
});

