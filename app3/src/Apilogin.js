import { useState } from 'react';

export default function Apilogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email === '') {
      alert("Please enter an email id");
      return;
    } else if (password === '') {
      alert("Please enter a password");
      return;
    }

    const data = {
      email: email,
      password: password
    };

    try {
      const response = await fetch("https://reqres.in/api/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      });

      const userData = await response.json();

      if (response.ok) {
        alert("You are correct");
      } else {
        alert("You are wrong");
      }

      console.log(userData);

    } catch (error) {
      console.error("Error during login:", error);
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
      <button onClick={handleLogin}>SUBMIT</button>
    </div>
  );
}
