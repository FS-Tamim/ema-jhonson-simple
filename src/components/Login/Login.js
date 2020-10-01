import React, { useState } from 'react';

import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { createUserWithEmailandPassword, handleGoogleSignIN, handleGoogleSignout, initialaizeFirebaseFramework, loginwithEmailandPassword } from './loginManager';


initialaizeFirebaseFramework();

const Login = () => {
    
      
const [newUser, setNewUser] = useState(false);
 const [user,setUser]=useState({
     userSignined:false,
     name:'',
     email:'',
     photo:''
 })
 const [loggedInUser,setLoggedInUser]=useContext(UserContext);
 let history = useHistory();
 let location = useLocation();

 let { from } = location.state || { from: { pathname: "/" } };

    const googleSignin=()=>{
        handleGoogleSignIN()
        .then(res=>{
            setUser(res);
            setLoggedInUser(res);
            history.replace(from);
        })
    }
    const googleSignout=()=>{
        handleGoogleSignout()
        .then(res=>{
            setUser(res);
            setLoggedInUser(res);
        })
    }
    
   
    const handelSubmit=(e)=>{
       
        if(newUser && user.email && user.password){
            createUserWithEmailandPassword(user.name,user.email,user.password)
            .then(res=>{
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);

            })

          
        }
        if(!newUser && user.email && user.password){
            loginwithEmailandPassword(user.email,user.password)
            .then(res=>{
                setUser(res);
                setLoggedInUser(res);
                history.replace(from);

            })  
        }
      
e.preventDefault();

                
    }
  
    const handleChange=(e)=>{
       let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
          }
          if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber =  /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
          }
          if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
          }
     
                
    }

 
    return (
        <div className="main">
           {
               user.userSignined ? <button onClick={googleSignout}>Signout</button>
               : <button onClick={googleSignin}>signin</button>

           }
            {
                user.userSignined && 
                <div>
                    <h1>welcome:{user.name}</h1>
                    <h2>email:{user.email}</h2>
                    <img src={user.photo} alt=""/>
                </div>
              
            
            }
            
            

            <br/>
            <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
            <label for="newUser">New User Sign up</label>
            <form     >
             { newUser && <input name="name" type="text" onBlur={handleChange} placeholder="Your name"/>}
             <br></br>
                    <input type="text" name="email" placeholder="email" onBlur={handleChange}></input><br>
                    </br>
                    <input type="password" name="password" placeholder="password" onBlur={handleChange}></input><br></br>
                    <input type="submit" value="submit"></input>
            </form>
           
            {
               
               user.success?<p style={{color:'green'}}>user {newUser?'created':'logged in'} successfully</p>:<p style={{color:'red'}}>{user.error}</p>
            }
          
          
        </div>
    );
};

export default Login;