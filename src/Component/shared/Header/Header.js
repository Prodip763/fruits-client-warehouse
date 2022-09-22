import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";


const Header = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handleSignout = ()=>{
        signOut(auth);
        navigate('/home');
    }
    return (
        <nav className="container mx-auto mt-2 flex items-center justify-between ">

            <div className="flex gap-20 items-center">
                <img className="w-36 " src={`https://img.freepik.com/free-vector/juice-spray-fruit-illustration_1284-56500.jpg?size=626&ext=jpg&ga=GA1.2.86413933.1642213775`}></img>
                <div className="flex gap-3">
                <p className="hover:text-pink-500 hover:underline decoration-pink-500"><Link to='/home'>Home</Link></p>
                <p className="hover:text-pink-500 hover:underline decoration-pink-500"><Link to='/blog'>Blog</Link></p>
                </div>
            </div>
            {
                    user ?
                        <button onClick={handleSignout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Sign Out
                        </button>
                        :
                        <Link to='/login'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Login
                        </button></Link>}
        </nav>
    );
};

export default Header;

