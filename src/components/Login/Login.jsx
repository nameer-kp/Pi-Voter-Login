import React, { useState } from 'react';
import TabNavigation from '../TabNavigation/TabNavigation';
import ElectionTable from '../TabNavigation/TabNavigation';
import './Login.css';

function Login() {
  const check = (e)=>{
    e.preventDefault()
    if(username==='Raniya' && password==='123'){
      setLogin(true)
      window.history.pushState("/Election")
    }else{
      setProblem('Password error')
    }
    
  }
  const [problem,setProblem] = useState('')
  const [login, setLogin] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState("");
  return (
   <>
   {!login?
   (<div id="card">
    <div id="card-content">
      <div id="card-title">
        <h2>LOGIN</h2>
        
      </div>
      <div className="underline-title"></div>
      
      <form method="post" className="form" onSubmit={check}>
        <label style={{paddingTop:'13px'}}>
            &nbsp;Username
          </label>
        <input id="user-email" className="form-content" type="text"  autocomplete="on" required 
        onChange={(event)=>{setUsername(event.target.value)}}/>
        <div class="form-border"></div>
        <label style={{paddingTop:'22px'}}>&nbsp;Password
          </label>
        <input id="user-password" className="form-content" type="password" name="password" required 
        onChange={(event)=>{setPassword(event.target.value)}}/>
        <div className="form-border"></div>
        
        <input id="submit-btn" type="submit" name="submit" value="LOGIN" />
        
      </form>
    </div>
  </div>):<TabNavigation/>}
      
    
   </>
  )
  } 

export default Login