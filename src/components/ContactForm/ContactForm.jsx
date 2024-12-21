import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import PropTypes from "prop-types";
import Style from "./ContactForm.module.css";

const addContactSchema = Yup.object().shape({
  name: Yup.string()
    .typeError("Must be a text")
    .min(3, "Too Short!")
    .max(500, "Too Long!")
    .required("Required"),

  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone number")
    .required("Required"),
});

function ValidationError({ message }) {
  return <span style={{ color: "red", fontSize: "12px" }}>{message}</span>;
}

ValidationError.propTypes = {
  message: PropTypes.string.isRequired,
};

export default function ContactForm() {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={addContactSchema}
    >
      {({ values, handleChange }) => (
        <Form className={Style.contactForm}>
          <div className={Style.contactFormContainer}>
            <div className={Style.formInput}>
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                name="name"
                value={values.name}
                placeholder="Name"
                onChange={handleChange}
              />
              <ErrorMessage name="name" component={ValidationError} />
            </div>
            <div className={Style.formInput}>
              <label htmlFor="number">Number</label>
              <Field
                type="text"
                name="number"
                placeholder="000-00-00"
                value={values.number}
              />
              <ErrorMessage name="number" component={ValidationError} />
            </div>
            <button type="submit" className={Style.formButton}>
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
