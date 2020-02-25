import React from "react";

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const errorState = {
  errors: []
}

function useFormValidation(initialState, validate) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({ errors: [] });
  const [isSubmitting, setSubmitting] = React.useState(false);

  React.useEffect(() => {
    if (isSubmitting) {
      const noErrors = errors.length === 0;
      if (noErrors) {
        setSubmitting(false);
        setValues(initialState);
      } else {
        setSubmitting(true);
      }
    }
  }, [errors]);

  function handleChange(event) {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  function handleErrors(err) {
    setErrors(prevState => ({ ...prevState, errors: [...prevState.errors, err] }))
  }

  function handleBlur() {
    const validationErrors = validate(values);
    handleErrors(validationErrors);
  }

  function handleSubmit(event) {
    const noErrors = errors.length === 0;
    const validationErrors = validate(values);
    handleErrors(validationErrors);

    if (noErrors) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...values })
      })
      .then(() => alert('Your email has been sent someone will reach out to you shortly!'))
      .catch(error => console.log(error));
    }

    setSubmitting(true);
    event.preventDefault();
  }

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  };
}

export default useFormValidation;
