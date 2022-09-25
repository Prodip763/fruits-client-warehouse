import React, { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
            
    }, [service, serviceId])

    //quantity
    
    const handleAmount = async(item) =>{
        const body = { item };
        await axios.put(`http://localhost:5000/product/update/${serviceId}`, body)
        .then((response) => {
            if(response.data.result.acknowledged){
                toast(response.data.message);
            }
            
        })

    }
    const handleProcess=()=>{
        toast('Avabilable quantity update successfully');
    }


    return (
        <div className="container mt-3">
            <h2 className="text-2xl text-pink-500 text-center">Thanks for you to comming our service</h2>
            <div className=" md:flex justify-evenly items-center mt-3 gap-40 ">
                <img className="w-1/2  ml-8" src={service.picture} />
                <div>
                    <h5 className=" font-bold">{service.name}</h5>
                    <p className="text-orange-600 font-bold">Price: {service.balance}</p>
                    <small className="font-thin">{service.about}</small>
                    <div className="rounded border-2"></div>
                    <div className="flex items-center gap-11 mt-2">
                        <p className="text-xl">Quantity</p>
                        <div className="flex gap-3">
                            <button className="text-2xl" onClick={()=>handleAmount({...service, action: 'dec'})}>-</button>
                            <input value={service.amount} type="text" name="search" className="w-16 text-center mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  />
                            <button className="text-2xl"  onClick={()=>handleAmount({...service, action: 'inc'})}>+</button>
                        </div>
                    </div>
                    <button onClick={handleProcess} className="mt-4 items-center bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
                    RESTOCK
                        </button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default ServiceDetail;


