import { async } from "@firebase/util";
import React, { useRef } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading/Loading";
import GoogleLogin from "../../Social/Google/GoogleLogin";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    let errorElement;
    const emailRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const handleRegister = () => {
        navigate('/register');
    }
    const handleLoginSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    if (error || resetError) {
        errorElement = <p className="text-red-500 text-center">Error: {error?.message} {resetError?.message}</p>
    }
    if (user) {
        navigate(from, { replace: true }); //redirect
    }
    if (loading || sending) {
        return <Loading></Loading>
    }
    const resetPassword = async (e) => {
        const email = emailRef.current.value;
        
        if(email){
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('Please enter your email')
        }
    }

    return (
        <div className="my-32">
            <h2 className="text-center text-pink-500 text-2xl">Please Login Fruits Warehouse</h2>
            <form onSubmit={handleLoginSubmit}>
                <label className="block ">
                    <span className="block text-center text-sm font-medium text-slate-700">Your Email</span>
                    <input ref={emailRef} type="email" name="email" required className="mx-auto w-1/2 mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
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

            </form>
            {errorElement}
            <p className="mt-2 text-center font-medium">If you are a new user fruits warehouse? <span onClick={handleRegister} className="text-pink-600 cursor-pointer">Please SignUp</span></p>
            <p className="mt-2 text-center ">Forget Password? <button onClick={resetPassword} className="text-pink-500 background-transparent font-bold uppercase px-3 py-1 text-xs outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
            >
                <i className="fas fa-heart"></i> Reset Password
            </button></p>
            <GoogleLogin></GoogleLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;