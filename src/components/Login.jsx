import React ,{useState}from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();
  const dispatch=useDispatch();
  const {error,status} = useSelector((state)=>state.auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e)=> {
    e.preventDefault();
    dispatch(login({email,password})) 

  }

  return (
     <div>
     <h1>LOG-IN</h1>

     <form onSubmit={handleSubmit}>

        <input type="text" value={email} placeholder='Enter your Email'onChange={(e)=> setEmail(e.target.value)} />
        <input type="password" value={password} typeof='password' placeholder='Enter Your Password'onChange={(e)=> setPassword(e.target.value)} />
        <button disabled={status === 'loading'}>
          {status === 'loading' ? 'Logging in...' : 'Login'  }
          </button>


          <h3 className='signup' onClick={()=> navigate('/SignUp')}>
            Don't have an account? Sign Up
          </h3>
     </form>

      {error && <p style={{color:'red'}}>{error}</p>}

     
 

    </div>
  )
}

export default Login