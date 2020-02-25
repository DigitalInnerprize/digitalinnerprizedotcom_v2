import React from 'react'
import { FlexRow} from './styled/containers'
import { FormContainer, Input, TextArea } from './styled/form'
import { Button } from './styled/button'
import useFormValidation from '../hooks/useFormValidation';
import { validateForm } from "../hooks/validators/validateForm";

const INITIAL_STATE = {
  name: "",
  phone: "",
  email: "",
  company: "",
  comment: ``
};

const ContactForm = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateForm);
  const [ errorArr ] = errors
  return (
      <FormContainer>
      {errorArr && errorArr.map(error => <p className="error-text">{Object.values(error)}</p>)}
        <form onSubmit={handleSubmit}>
          <FlexRow marginAuto paddingTop='md'>
              <Input
              name='name'
              placeholder='Name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              />
              <Input
              name='company'
              placeholder='Company Name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.company}
              />
              <Input
                name='email'
                type='email'
                placeholder='Email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                />
              <Input
                name='phone'
                type='number'
                placeholder='Contact Number'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
                />
            <TextArea 
            name='comment' 
            rows='5' 
            placeholder='Briefly explain your project' 
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.comment}
            />
            <Button 
              disabled={isSubmitting}
              type='submit'>Send Message</Button>
          </FlexRow>
        </form>
      </FormContainer>
  )
}

export default ContactForm
