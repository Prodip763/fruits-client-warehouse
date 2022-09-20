import React from "react";
import { Link } from "react-router-dom";

const Header = () =>{
    return(
        <nav className="container mx-auto mt-2 flex items-center justify-between ">
            <img className="w-36 " src={`https://img.freepik.com/free-vector/juice-spray-fruit-illustration_1284-56500.jpg?size=626&ext=jpg&ga=GA1.2.86413933.1642213775`}></img>
            <div className="flex gap-3  ">
                <p className="hover:text-orange-500 hover:underline decoration-pink-500"><Link to='/home'>Home</Link></p>
                <p className="hover:text-orange-500 hover:underline decoration-pink-500"><Link to='/blog'>Blog</Link></p>
            </div>
        </nav>
    );
};

export default Header;

