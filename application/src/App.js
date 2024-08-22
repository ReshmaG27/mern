import './App.css';
import Home from './home.js';
import { useState } from 'react';

function App() {
  let firstname = 'Reshma G';
  let email = "reshmag2704@gmail.com";
  let address = "Chennai";

  // State variable
  const [email2, setEmail] = useState('reshmag2704@gmail.com');
  const [mobile, setMobile] = useState('9840410086');
  const validate = () =>{
    if (email2 == ""){
      alert("Email is empty")
    }else if (mobile == ""){
      alert("Mobile is empty")
    }else{
      alert("Everything is fine")
    }
  }

  return (
    <div className='container'>
      <h1>This is a React app</h1>
      Name: {firstname}<br />
      Email: {email}<br />
      Email2: {email2}<br />
      Mobile: {mobile}<br/>
      Address: {address}<br />
      <Home />
      Email: <input type='text' id='tb' onChange={(e) => setEmail(e.target.value)}/><br/>
      Mobile: <input type='text' id='tb' onChange={(e) => setMobile(e.target.value)}/><br/>
      <button onClick={()=>validate()}>CLICK </button>
    </div>
  );
}

export default App;