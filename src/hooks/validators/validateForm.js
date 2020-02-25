export function validateForm(values) {
  let errors = [];

  // Name Errors
  if (!values.name) {
    errors.push({name:"Required Name"});
  }

  // Password Errors
  if (!values.phone) {
    errors.push({phone:"Required Phone Number"});
  } else if (values.phone.length !== 10) {
    errors.push({phone :"Phone must be 10 characters including area code"});
  }

  // Email Errors
  if (!values.email) {
    errors.push({ email:"Required Email" });
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.push({ email: "Invalid email address"});
  }

  return errors;
}
