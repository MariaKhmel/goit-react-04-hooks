import { useState } from "react";

export function SignupForm() {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
  
    const handleChange = event => {
      const { name, value } = event.target;
  
      switch (name) {
        case 'email':
          setEmail(value);
          break;
  
        case 'password':
          setPassword(value);
          break;
  
        default:
          return;
      }
    };
  
    return (
      <form autoComplete="off">
        <label >
          <span>Mail</span>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
          />
        </label>
  
        <label >
          <span>Password</span>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={password}
          />
        </label>
  
        <button type="submit">Register</button>
      </form>
    );
  }