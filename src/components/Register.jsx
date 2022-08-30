import { Formik } from "formik";
import * as Yup from "yup";
const Register = () => {
  const schema = Yup.object().shape({
    username: Yup.string()
      .required("Username field is required")
      .min(6, "6 digits minimum"),
    password: Yup.string()
      .required("Password field is required")
      .min(8, "8 digits minimum"),
    confirmPassword: Yup.string()
      .required("ConfirmPassword  field is required")
      .oneOf([Yup.ref("password"), null], "Passwords must be the same"),
  });
  return (
    <div className="register">
      <h1>Resiter</h1>
      <Formik
        validationSchema={schema}
        initialValues={{ username: ``, password: ``, confirmPassword: `` }}
      >
        {({ handleChange, handleBlur, values, errors, touched }) => (
          <form noValidate>
            <input
              type="username"
              name="username"
              placeholder="username"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.username}
            />
            <p>{errors.username && touched.username && errors.username}</p>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <p>{errors.password && touched.password && errors.password}</p>

            <input
              type="password"
              name="confirmPassword"
              placeholder="enter password again"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
            />
            <p>
              {errors.confirmPassword &&
                touched.confirmPassword &&
                errors.confirmPassword}
            </p>
            <input type="checkbox" name="checkbox" id="" />
          </form>
        )}
      </Formik>
    </div>
  );
};
export default Register;
