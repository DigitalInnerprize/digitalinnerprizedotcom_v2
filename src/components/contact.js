import React from 'react'
import { withTheme } from 'styled-components'
import { FlexRow } from './styled/containers'
import { FormContainer, Input } from './styled/form'
import { Button } from './styled/button'
import { useForm } from "react-hook-form";
import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup.string().required(),
  company: yup.string().required(),
  email: yup.string().email(),
  phone: yup
  .number()
  .required()
  .positive()
})

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

const ContactForm = () => {
  const { register, handleSubmit, errors, formState: { isSubmitting } } = useForm({
    validationSchema: schema
  });

  const onSubmit = (data, e) => {
    if (Object.keys(errors).length === 0) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...data })
      })
      .then(() => alert('Your email has been sent someone will reach out to you shortly!'))
      .catch(error => console.log(error));
    }
    e.preventDefault();
    e.target.reset();
  }

  return (
      <FormContainer>
      {errors.name && <p className='error-text'>{errors.name.message}</p>}
      {errors.company && <p className='error-text'>{errors.company.message}</p>}
      {errors.email && <p className='error-text'>{errors.email.message}</p>}
      {errors.phone && <p className='error-text'>{errors.phone.message}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <FlexRow
            column
            marginAuto
            paddingTop='md'>
              <Input
              name='name'
              placeholder='Name'
              ref={register}
              />
              <Input
              name='company'
              placeholder='Company Name'
              ref={register}
              />
              <Input
                name='email'
                type='email'
                placeholder='Email'
                ref={register}
                />
              <Input
                name='phone'
                type='number'
                placeholder='Contact Number'
                ref={register}
                />
            <Button 
              disabled={isSubmitting}
              type='submit'>Send Message</Button>
          </FlexRow>
        </form>
      </FormContainer>
  )
}

export default withTheme(ContactForm)
