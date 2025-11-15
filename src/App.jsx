import React from 'react'
import Login from './components/Login'
import Home from './components/Home'
import './App.css'
import { useSelector } from 'react-redux'
import { BrowserRouter as Router,Routes,Route,Navigate  } from 'react-router-dom'
import SignUp from './components/SignUp'


function App() {

const {token,user}= useSelector((state) => state.auth);

 
 return (
   <Router>
    <Routes>

      <Route
        path="/"
        element={
          token ? <Home token={token} user={user} /> : <Navigate to="/login" /> }/>


           <Route
        path="/login"
        element={
          token ?  <Navigate to="/" /> : <Login/>}/>
       

           <Route
        path="/SignUp"
        element={
          token ?  <Navigate to="/login" /> : <SignUp/>}/>


</Routes>
</Router>

        )}


export default App