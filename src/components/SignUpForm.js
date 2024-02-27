import { useState , useEffect} from "react";

const useLocalStorage = (key, defaultValue) =>{
const [state, setState] = useState(()=>{
  return JSON.parse(window.localStorage.getItem(key)) ?? defaultValue; 
})

 useEffect(()=>{
      window.localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

return [state, setState]
}

export function SignupForm() {
    // const [email, setEmail] = useState (()=> {
    //   return JSON.parse(window.localStorage.getItem('email')) ?? '';
    // });


    // const [password, setPassword] = useState (()=>{
    //   return JSON.parse(window.localStorage.getItem('password')) ?? '';
    // })

    const [email, setEmail] = useLocalStorage('email', '');
    const [password, setPassword] = useLocalStorage('password', '');

    // useEffect(()=>{
    //   window.localStorage.setItem('email', JSON.stringify(email))
    // }, [email])
    // useEffect(()=>{
    //   window.localStorage.setItem('password', JSON.stringify(password))
    // }, [password])

  
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