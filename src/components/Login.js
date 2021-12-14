import React  from 'react';
import { useState } from 'react';
import { useHistory } from "react-router-dom";

const Login = () => {

 
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory();
  

    const onSubmit = (e) => {
        e.preventDefault()

        

        if(!username){
            alert('Please Enter User Name')
            return    
        }
        else if(!password){
            alert('Please Enter Password')
            return    
        }
        else
        {
            setUserName('');
            setPassword('');
            history.push("/EmployeeProfile")
        }

       // onLogIn({username, password})
    }

    return (
        <form className='login-form' onSubmit={onSubmit}>
            <h2>Staff Log in</h2>
            <div className='form-control'>
                <label>User Name</label>
                <input type='text' 
                       placeholder='Please Enter User Name' 
                       value={username} 
                       onChange={(e)=> setUserName(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Password</label>
                <input type='text' placeholder='Please Enter Password' 
                        value={password} 
                        onChange={(e)=> setPassword(e.target.value)}/>
            </div>

            

            <input type='submit' value='Log in' className='btn btn-block' />
        </form>
        
    )
}

export default Login