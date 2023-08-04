import React from "react"
import { useState,useEffect } from "react"
import styled from 'styled-components'
import { FormRow } from "../components"
import { toast } from "react-toastify"



const initialState = {
  name:"",
  password:'',
}


const Login = () => {
  const [values, setValues] = useState(initialState)

  // const [showPassword, setShowPassword] = React.useState(false);

  // const handleClickShowPassword = () => setShowPassword((show) => !show);



const handleChange = (e) =>{
const name = e.target.name 
const value = e.target.value 
setValues({...values,[name]:value})
}

const onSubmit = (e) =>{
  e.preventDefault()
  const {name,password} = values
  if (!name || password) {
    toast.error('Please fill out all fields');
  }
}

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <h3>Login</h3>
       {/*name field*/}
       <FormRow 
       type='text' 
       name='name' 
       value={values.name} 
       handleChange={handleChange}
       />
       {/*password field*/}
       <FormRow 
       type='password' 
       name='password' 
       value={values.password} 
       handleChange={handleChange}
       />
        <button type='submit' className="btn btn-block">Submit</button>
      </form>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
    width: 90%;
    margin-left: 0.2rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`

export default Login