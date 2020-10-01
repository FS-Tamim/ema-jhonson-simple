import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


export const initialaizeFirebaseFramework=()=>{
    firebase.initializeApp(firebaseConfig);
}

export const handleGoogleSignIN=()=>{
    var provider = new firebase.auth.GoogleAuthProvider(); 
   return firebase.auth().signInWithPopup(provider) 
    .then(res=>{
        const {displayName,photoURL,email}=res.user;
        const signedInUser={
        userSignined:true,
        name:displayName,
        email:email,
        photo:photoURL,
        error:'',
        success:true
        }
        return signedInUser;
       
    }).catch(function(error) {
     
        var errorCode = error.code;
        var errorMessage = error.message;
   
        var email = error.email;
      
        var credential = error.credential;
      
      });  
}


export const handleGoogleSignout=()=>{
   return firebase.auth().signOut()
    .then(res=>{
        const signedOutUser={
            userSignined:false,
            name:'',
            email:'',
            photo:'',
            error:'',
            success:false
            }
            return signedOutUser;
           

    }).catch(error=>
        console.log(error)
        )
     
}

export const createUserWithEmailandPassword=(name,email,password)=>{
    return firebase.auth().createUserWithEmailAndPassword(email,password)
    .then(res=>{
    const newUserInfo = res.user;
    newUserInfo.error ='';
    newUserInfo.success=true;
    updateUserName(name);
    return newUserInfo;
    }).catch(error=> {
      
     let errorMessage = error.message;
        const newUserInfo = {};
        newUserInfo.error =errorMessage;
        newUserInfo.success =false;
        return newUserInfo;
       
      });
}

export const loginwithEmailandPassword=(email,password)=>{
    return firebase.auth().signInWithEmailAndPassword(email,password)
    .then(res=>{
        const newUserInfo = res.user;
        newUserInfo.error ='';
        newUserInfo.success=true;
        return newUserInfo;
        
        }).catch(error=> {
        // Handle Errors here.
        let errorMessage = error.message;
        const newUserInfo = {};
        newUserInfo.error =errorMessage;
        newUserInfo.success =false;
        return newUserInfo;
      
        // ...
      });
}

const updateUserName = name =>{
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name
    }).then(function() {
      console.log('user name updated successfully')
    }).catch(function(error) {
      console.log(error)
    });
  }