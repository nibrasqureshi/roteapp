import React from 'react';
import { Formik, Form, Field, ErrorMessage, RadioButtonGroup } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';




export const Signup = ({ errors, touched, isValid, dirty } ) => {
    Yup.object().shape({
      radioGroup: Yup.string().required("A radio option is required"),
    tandc: Yup.bool() // use bool instead of boolean
        .oneOf([true], "You must accept the terms and conditions")
 })
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
    phone: Yup.number()
      .min(10, "Must be more than 10 characters")
      .required("This field is requried"),
      acceptTerms: Yup.bool().oneOf([true], 'Accept Terms & Conditions is required'),
      textField: Yup.string()
      /*.max(12, 'Must be 12 characters long')
      .min(8, 'Must be 8 characters min')*/
     /* .required('Required')
      .matches(

        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{8,12})/,
        "Must Contain 8 Characters, not exceding 12, One Uppercase, One Lowercase, and One Special Case Character"
      ),*/
      
  })
  return (
    <Formik
    
      initialValues={{
        
        acceptTerms: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone:'',
        tandc:'',
        textField:'',
        
        
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}  
      
     
    >
      {({ errors, status, touched })  => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <TextField label="Phone Number" name="phone" type="text" />
  
            <div className="form-group form-check">
                            <Field type="checkbox" name="acceptTerms" className={'form-check-input ' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')} />
                            <label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
                            <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
                        </div>
                        
          
            <button className="btn btn-dark mt-3" type="submit"
      /*  
        className="btn btn-dark mt-3"
        disabled={!isValid && !dirty}
        onClick={()=> Yup.object("/about")}*/>Register</button>
  
        
          </Form>
        </div>
      )}
    </Formik>
    
  )
}
