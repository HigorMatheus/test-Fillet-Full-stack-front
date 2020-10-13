import React, {useState, useHistory} from 'react';
import './App.css';
import Input from './components/Input';
import api from './services/api'

function App() {
  // const history = useHistory()
  const [ first_name, setFirstName] = useState('')
  const [ last_name, setLastName] = useState('')
  const [telephone, setTelephone] = useState('')
  const [email, setEmail] = useState('')
  const [ password, setPassword] = useState('')
  const [ confirm_password, setConfirmPassword] = useState('')

  function handleSubnit(e){
   
    e.preventDefault();
    console.log({
      first_name,
      last_name,
      telephone,
      email,
      password,
      confirm_password
    });
    api.post('/user',{
      first_name,
      last_name,
      telephone,
      email,
      password,
      confirm_password
    }).then(()=>{
      alert('cadastro realizado')
      // history.push('/')
    }).catch(()=>{
      alert('erro no cadastro')
    })
  }
  return (
    <div  id="App"className="App col-md-12 row">
      <div className="div-color col-md-3"></div>

      <form onSubmit={handleSubnit} class="needs-validation col-md-7" novalidate>
        <h1>Sign up</h1>
        <div class="form-row">
          <Input 
            name='first_name' 
            label='First name'  
            required 
            value={first_name} 
              onChange={(e)=>{setFirstName(e.target.value)}}
            />
          <Input 
            name='last_name' 
            label='Last name'  
            required 
            value={last_name} 
            onChange={(e)=>{setLastName(e.target.value)}}
            />
          <Input 
            name='telephone' 
            label='Phone'  
            required 
            value={telephone} 
            onChange={(e)=>{setTelephone(e.target.value)}}
            />
          <Input 
            name='email' 
            label='Email'  
            required 
            value={email} 
            onChange={(e)=>{setEmail(e.target.value)}}
            />
          <Input 
            name='password' 
            type='password' 
            label='Password'  
            required 
            value={password} 
            onChange={(e)=>{setPassword(e.target.value)}}
            />
          <Input 
            name='confirm_password' 
            label='Confirm Password'  
            required 
            value={confirm_password} 
            onChange={(e)=>{setConfirmPassword(e.target.value)}}
          />
        <button class="btn btn-primary col-md-6" type="submit">Create account</button>
        </div>
      </form>
    </div>
  );
}

export default App;
