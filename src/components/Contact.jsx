import { Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import ContactDetails from "./ContactDetails";
const Contact = () => {
  const schema = Yup.object().shape({
    firstName: Yup.string().required("please enter your first name"),
    reasonOfContact: Yup.string()
      .required("Enter your reason of contact")
      .max(100, "maximom 100 letters"),
    how: Yup.string().required("choose an option"),
  });
  const [items, setItems] = useState([]);

  return (
    <div className="contact">
      <h1>contact-us</h1>
      <Formik
        validationSchema={schema}
        initialValues={{ firstName: "", reasonOfContact: "", how: "" }}
        onSubmit={(values) => alert(`are you sure?` + JSON.stringify(values))}
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
              type="text"
              name="firstName"
              placeholder="first name"
              onChange={handleChange}
              value={values.firstName}
              onBlur={handleBlur}
            />
            <p>{errors.firstName && touched.firstName && errors.firstName}</p>
            <input
              type="text"
              name="reasonOfContact"
              placeholder="reasons of contact"
              onChange={handleChange}
              value={values.reasonOfContact}
              onBlur={handleBlur}
            />
            <p>
              {errors.reasonOfContact &&
                touched.reasonOfContact &&
                errors.reasonOfContact}
            </p>
            <label>How did you hear about us?</label>
            <select {...handleChange("select")} onChange={handleChange}>
              <option value="">Null</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
            {errors.how && <p>{errors.how.message}</p>}
            <button
              type="submit"
              onClick={() =>
                setItems([values.firstName, values.reasonOfContact])
              }
            >
              submit
            </button>
          </form>
        )}
      </Formik>
      <ContactDetails items={items} />
    </div>
  );
};

export default Contact;
