import React , {useState}from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../store/authSlice';



function SignUp() {
   
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
    const [age, setAge] = useState('')

    const dispatch = useDispatch();
    const {error,status} = useSelector((state)=>state.auth)

    const handleSubmit = (e)=> {
        e.preventDefault();

        if (!name || !email || !password || !age) {
            alert('Please fill in all required fields.');
            return;
        }

        dispatch(register({name,email, age:Number(age),password,isAdmin}))
    }

  return (
    <div>
   
 
          <h2>Sign-Up</h2>   

    <form onSubmit={handleSubmit}>
        <input 
        placeholder='Name' 
        value={name}
         onChange={(e) => setName(e.target.value)}
         
         />
          <input 
        placeholder='Email' 
        value={email}
         onChange={(e) => setEmail(e.target.value)}
         
         />
           <input 
           type='password'
        placeholder='Password' 
        value={password}
         onChange={(e) => setPassword(e.target.value)}
         
         />

          <input 
          type='number'
        placeholder='Age' 
        value={age}
         onChange={(e) => setAge(e.target.value)}
         
         />

         <label>
            <input
            type='checkbox'
            checked={isAdmin}
            onChange={(e) => setIsAdmin (e.target.checked)}
             />
             Is Admin   
            
         </label>

         <button type='submit' disabled = {status === 'loading'}>
            {status === 'loading' ? 'Registering...' : 'Register'  }
         </button>




    </form>

    {error && <p style={{color:'red'}}>{error}</p>}

    <h3 className='login' onClick={()=> navigate('/login')}>
        Already have an account? Log In
    </h3>
    </div>
  )
}

export default SignUp