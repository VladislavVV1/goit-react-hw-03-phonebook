import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react'
import * as Yup from 'yup';




const quizSchema = Yup.object().shape({
  name: Yup.string().min(3, 'Too short!').required('This folder is required!'),
  number: Yup.string().min(8).required('A phone number is required'),
});


export const  PhoneBookForm = ({addContact}) => {
  return (


    <Formik initialValues={{
      name:'',
      number:'',
    }}
    validationSchema={quizSchema}
    onSubmit={(values, actions) => {
      addContact(values);
      actions.resetForm();
    }}
    >
<Form>
  <label>
          Name
        <Field
          name="name"
        />
        <ErrorMessage name='name' ></ErrorMessage>
  </label>       
        
  <label>
         Number
          <Field
            name="number"
        />
        <ErrorMessage name='number'></ErrorMessage>
  </label> 
  <button type="submit">Add contact</button>
</Form>
    </Formik>

  )
}