import React from "react";

import { Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

function InputForm({ errors, touched, isValid, dirty }) {
  // console.log(errors);

  const navigate = useNavigate();

  return (
    <Form>
      <div className="form-group">
        <label className="col-form-label" style={{marginLeft:"-510px"}}>Registration :</label>
        <Field
          name="registration"
          className={
            touched.registration
              ? `form-control ${errors.registration ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        />
        {touched.registration && errors.registration && (
          <small className="text-danger">{errors.registration}</small>
        )}
      </div>
      <div className="form-group">
        <label className="col-form-label" style={{marginLeft:"-530px"}}>Program : </label>
        <Field as="select" 
          name="program"
          className={
            touched.program
              ? `form-control ${errors.program ? "invalid" : "valid"}`
              : `form-control`
          }
          type="text"
        >
        <option value="Invalid"></option>
        <option value="p1">BCE</option>
        <option value="p2">BSE</option>
        <option value="p3">BCS</option>
          </Field> 
        {touched.program && errors.program && (
          <small className="text-danger">{errors.program}</small>
        )}
      </div>

      <label className="col-form-label" style={{marginLeft:"-540px"}}>Gender :</label>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="gender" value="Male" />
              Male
            </label>
            <br/>
            <label>
              <Field type="radio" name="gender" value="Female" />
              Female
            </label>
            <br/>
            {touched.gender && errors.gender && (
          <small className="text-danger">{errors.gender}</small>
        )}
            
          </div>

        


          
          <label className="col-form-label" style={{marginLeft:"-490px"}}>Preferred Date :</label>
          <div role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="date" value="22-11-2021" />
              22-11-2021
            </label>
            <label style={{marginLeft:"50px"}}>
              <Field type="radio" name="date" value="25-11-2021" />
              25-11-2021
            </label>
            <br/>
            {touched.date && errors.date && (
          <small className="text-danger">{errors.date}</small>
        )}
            
          </div>

          
     


      <button 
        type="Register"
        className="btn btn-primary my-3"
        disabled={!isValid || !dirty}
        onClick={()=> navigate("/register")}
      >
        Submit
      </button>
    </Form>
  );
}

export default InputForm;