import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import {UserContext} from '../../App';
import logo from '../../images/logos/logo.png';
import google from '../../images/google.png';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
        const history= useHistory()
        const location= useLocation()
        let { from } = location.state || { from: { pathname: "/" } };
   
    
   if(firebase.apps.length=== 0){
    firebase.initializeApp(firebaseConfig);
   }
   
    const handleGoogleLogin =() =>{
        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
    
            const {displayName,email} = result.user;
            const signedInUser ={name:displayName,email}
            // console.log(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
            // storeAuthToken();
            // storeAuthToken()
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
          // const storeAuthToken =()=>{
          //   firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          //   .then(function(idToken) {
          //       sessionStorage.setItem('token',idToken);
          //     }).catch(function(error) {
          //       // Handle error
          //     });
          // }
    }
    return (
        <div className='text-center'>
            <div className='my-5'>
              <a className="navbar-brand" href= '#'> <img src={logo} alt="" style={{height: '50px'}} /></a>
            </div>
            <div className="login-section">
                <h3>Login with Google</h3>
                <button onClick={handleGoogleLogin} className="btn w-75 border my-3">
                    <img src={google} style={{height:'30px'}} alt=""/> Continue with google.
                </button>

            </div>

            
        </div>
    );
};

export default Login;