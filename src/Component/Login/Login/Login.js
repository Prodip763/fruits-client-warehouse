import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


    const navigate = useNavigate();
    const handleRegister = () =>{
        navigate('/register');
    }
    const handleLoginSubmit = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }

    if(user){
        navigate('/home');
    }


    return (
        <form onSubmit={handleLoginSubmit}>
            <label className="block ">
                <span className="block text-center text-sm font-medium text-slate-700">Your Email</span>
                <input type="email" name="email" required className="mx-auto w-1/2 mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500       
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
            </label>
            <label className="block">
                <span className="block text-center text-sm font-medium text-slate-700">Password</span>
                <input type="password" name="password" required className="mx-auto w-1/2 mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500       
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
            </label>
            <button className="mx-auto block w-1/2 mt-2  bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded" >
                Login
            </button>
            <p className="mt-4 text-center font-medium">If you are a new user fruits warehouse? <span onClick={handleRegister} className="text-pink-600 cursor-pointer">Please SignUp</span></p>
        </form>
        
    );
};

export default Login;