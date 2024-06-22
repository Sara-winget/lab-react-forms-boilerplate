import { useEffect, useState } from "react";
import React from "react";
import './Forms.css'
function Form(){
const [formData, setFormData]=useState({firstName:"",lastName:"",email:"",phNo:""})
const [errors,setError]=useState({});
const [submitForm,setSubmit]=useState(false);
const handleChange=(e)=>{
const {name,value}=e.target
setFormData({
    ...formData,
    [name]:value
})}
const handleSubmit=(e)=>{
    e.preventDefault();
    setError(validate(formData));
    setSubmit(true);
}
useEffect(()=>{
    console.log(errors)
},[errors])


const validate = (values) => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    const error = {};
    if (!values.firstName) {
      error.firstName = "First name required";
    }
    if (!values.lastName) {
      error.lastName = "Last name required";
    }
    if (!values.email) {
      error.email = "Email required";
    } else if (!regexEmail.test(values.email)) {
      error.email = "Email is not valid";
    }
    if (!values.phNo) {
      error.phNo = "Phone number required";
    } else if (values.phNo.length !== 10) {
      error.phNo = "Phone number should contain exactly 10 digits";
    }
    return error;
  };
    return(
        
        <div className="form">
{Object.keys(errors).length===0 && submitForm ?<div className="Success"><h1>Submitted succesfully</h1></div>:null}
        <form onSubmit={handleSubmit}>
          <div className="forms">
          <div className="items"><h3>REGISTRATION FORM</h3></div>
            
            <div className="items">
            <input className="firstName"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            />
            {errors.firstName&&<p style={{color:"red"}}>{errors.firstName}</p>}
            </div>
            <div className="items">

           <input className="lastName"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            />
            {errors.lastName&&<p style={{color:"red"}}>{errors.lastName}</p>}
            </div>
            <div className="items">

            <input className="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            />
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
            </div>
         <div className="items">

            <input className="phNo"          
            type="number"
            name="phNo"
            placeholder="Phone No"
            value={formData.phNo}
            onChange={handleChange}
            />
            {errors.phNo && <p style={{color:"red"}}>{errors.phNo}</p>}
            </div>
            <div className="items">
            
            <button type="submit">Submit</button>
            </div>
            </div>
        </form>
        </div>
    )
}
export default Form;