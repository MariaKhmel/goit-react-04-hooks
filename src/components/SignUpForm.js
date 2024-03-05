<<<<<<< Updated upstream
=======
<<<<<<< HEAD
import { useState } from "react";

export function SignupForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // }
    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value);
    // }

    const handleChange = (e) => {
        const { name, value } = e.target;
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
    }
    return (
        <>
            <form autoComplete="off">
                <label >
                    <span>Почта</span>
                    <input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                    />
                </label>

                <label >
                    <span>Пароль</span>
                    <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                    />
                </label>

                <button type="submit">Зарегистрироваться</button>
            </form>

        </>
    )
}


// class OldSignupForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form className={styles.form} autoComplete="off">
//         <label className={styles.label}>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>

// <label className={styles.label}>
//   <span>Пароль</span>
//   <input
//     type="password"
//     name="password"
//     onChange={this.handleChange}
//     value={this.state.password}
//   />
// </label>

//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     );
//   }
// }
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
  }
=======
  }
>>>>>>> 8abe07444b26bd8c250362062b2e6ef2278d1cde
>>>>>>> Stashed changes
