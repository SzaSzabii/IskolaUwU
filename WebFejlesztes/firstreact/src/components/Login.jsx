import React, { useState } from 'react';
import {form,Input,FormFeedback,FormGroup,Label,Form} from 'reactstrap'

export const Login=()=> {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [isValidU,setIsValidU]=useState(null)


    const handleCheckUN=()=>{
        console.log("ok")
        if(username==process.env.REACT_APP_UN)
            //console.log("Helyes")
            setIsValidU(true)
        else
            //console.log("Rossz")
            setIsValidU(false)
    }

  return (
    <div row justify-content-center>
    <Form className='myform border shadow p-3'>
    <h3>Login</h3>

        
    <FormGroup>
        <Label for="exampleEmail">Username:</Label>
        <Input value={username} onChange={(e)=>setUsername(e.target.value)} autoFocus onBlur={handleCheckUN}
        className={isValidU==null? "" : (isValidU? "is-valid" : "is-invalid")}
        />
        <FormFeedback> Hibás felhasználónév! </FormFeedback>
    </FormGroup>
    <FormGroup>
        <Label for="exampleEmail">Password</Label>
        <Input value={password} onChange={(e)=>setPassword(e.target.value)} autoFocus onBlur={handleCheckUN}/>
        <FormFeedback> Hibás jelszó! </FormFeedback>
    </FormGroup>
    </Form>
    </div>
  )
}
