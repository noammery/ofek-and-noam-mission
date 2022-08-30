import { Formik } from "formik";
import * as Yup from "yup";
const LoginForm = () => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required(`please enter an email!`)
      .email("Please enter a valid Email"),
    password: Yup.string()
      .required("passwored is a required field")
      .min(5, "Password must be 5 letters."),
  });
  return (
    <div className="loginForm">
      <h1>Login</h1>
      <Formik
        validationSchema={schema}
        initialValues={{ email: ``, password: `` }}
        onSubmit={(values) => alert(`what the fuck  ` + JSON.stringify(values))}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="email"
              name="email"
              placeholder="email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            <p>{errors.email && touched.email && errors.email}</p>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            <p>{errors.password && touched.password && errors.password}</p>
            <button type="submit">Login</button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default LoginForm;
