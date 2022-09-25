import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Detail = ({ detail }) => {
    const { name, picture, _id, balance } = detail;
    const navigate = useNavigate();
    const navigateTOServiceDetail = id => {
        navigate(`/service/${id}`)
    }
   
    return (
        <div className="border-2 rounded-lg shadow-lg mt-2 bg-blue-100 w-auto ">
            <div >
                <img src={picture}   />
                
            </div>

            <h5 className=" font-bold">{name}</h5>
            <p className="text-orange-600 font-bold">Price: {balance}</p>
            <button onClick={() => navigateTOServiceDetail(_id)} className="w-full mt-2  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                Add To Cart
            </button>
            <div>
               
            <Link to={`/updateService/${_id}`}><button className="w-full mt-2  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                    Update Cart
                </button></Link>
                
            </div>
            
            
        </div>
    );
};
export default Detail;

