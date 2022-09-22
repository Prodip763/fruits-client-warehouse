import { deleteApp } from "firebase/app";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../shared/Loading/Loading";
const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
            errorElement= <p className="text-red-500 text-center">Error: {error.message}</p>
      }
      if (loading) {
        return <Loading></Loading>
      }
      if (user) {
        navigate('/home');
      }
        
    return (
        <div>
            <div className="flex gap-2 items-center mx-auto">
                <div className=" border rounded-lg text-sky-400 w-1/2"></div>
                <p className="text-sky-400">Or</p>
                <div className="border rounded-lg text-sky-400 w-1/2"></div>
            </div>
            {errorElement}
            <div>
            <button onClick={() => signInWithGoogle()} className="mx-auto block w-64 mt-2  bg-blue-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded" >
             Google Sign In
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;