import React from 'react';
import { Formik, Form, } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';



export const Login = ( ) => {
   
  const validate = Yup.object({
   
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    
  })
  return (
    <Formik
    
      initialValues={{
       
        email: '',
        password: '',
       
        
        
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}  
      
     
    >
      {()  => (
        <div style={{marginBottom:'200px'}}>
          <h1 className="my-4 font-weight-bold .display-4">Log In</h1>
          <Form>
           
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
        
          
            <button className="btn btn-dark mt-3" type="submit"
      /*  
        className="btn btn-dark mt-3"
        disabled={!isValid && !dirty}
        onClick={()=> Yup.object("/about")}*/>Log In</button>
  
          
          </Form>
        </div>
      )}
    </Formik>
    
  )
}
