import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validate = () => {
    if (email === '') {
      alert("Please enter an email id");
    } else if (password === '') {
      alert("Please enter a password");
    } else {
      alert("Submitted successfully.");
    }
  };

  return (
    <div className="container">
      <h4>{email}</h4>
      <h4>{password}</h4>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />
      <button onClick={validate}>SUBMIT</button>
    </div>
  );
}
