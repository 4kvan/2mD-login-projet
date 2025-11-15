import React, { useState,useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { logout } from '../store/authSlice';


function Home({token,user}) {
 const dispatch= useDispatch();
 const [users, setUSers] = useState([]);
 const [error, setError] = useState(null)

  
    useEffect(() => {
      const fetchUsers = async () => {

        try{
          const response = await fetch ('http://localhost:3000/api/users',
            {
              headers : {
                'Authorization': `Bearer ${token}`,
                'Content-Type' : 'application/json',
              },
            }
          );
       

      if(!response.ok){
        const errorData = await response.json();
        throw new Error (errorData.message || 'Failed to fetch users');
      }

      const data = await response.json();
      setUSers(data);}

      catch (err){
        setError(err.message);
      }
    };

      if (token) fetchUsers();
  },[token]);
       
          
 





  return (
    <div>
        <h2> Hello {user.name}</h2>
        <button onClick={()=>dispatch(logout())}>LOGOUT</button>


      <h3>USers List</h3>
      {error && <p style={{color : 'red'}}>{error}</p>}
      {!error && users.length === 0 && <p>Loading users ....</p>}

      <ul>
        {users.map((u)=>(
          <li key={u.id}>
            {u.name } ({u.email}) - Age : {u.age}
          </li>
      ))}
      </ul>

    </div>
  );
}

export default Home