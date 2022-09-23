import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [qty, setQty] = useState(1);
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    const handleDecrement = ()=>{
        setQty(prevCount => prevCount - 1);
    }

    const handleIncrement = () =>{
        setQty(prevCount => prevCount + 1);
    }



    return (
        <div className="container mt-3">
            <h2 className="text-2xl text-pink-500 text-center">Thanks for you to comming our service</h2>
            <div className="flex justify-evenly items-center mt-3 gap-40 ">
                <img className="w-1/2  ml-8" src={service.picture} />
                <div>
                    <h5 className=" font-bold">{service.name}</h5>
                    <p className="text-orange-600 font-bold">Price: {service.balance}</p>
                    <small className="font-thin">{service.about}</small>
                    <div className="rounded border-2"></div>
                    <div className="flex items-center gap-11 mt-2">
                        <p className="text-xl">Quantity</p>
                        <div className="flex gap-3">
                            <button className="text-2xl" onClick={handleDecrement}>-</button>
                            <input type="text" name="search" className="w-16 text-center mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"  />
                            <button className="text-2xl" onClick={handleIncrement}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;


