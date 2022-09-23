import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])





    return (
        <div>
            <h2>detail:{serviceId}</h2>
            <h2 className="text-2xl text-pink-500 text-center">Thanks for you to comming our service</h2>
            <div className="border-2 rounded-lg shadow-lg mt-2 bg-blue-100 w-1/2 ">
                <div>
                    <img src={service.picture} />
                </div>
                <h5 className=" font-bold">{service.name}</h5>
                <p className="text-orange-600 font-bold">Price: {service.balance}</p>
                <button className="w-full mt-2  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
                    Add To Cart
                </button>
            </div>
        </div>
    );
};

export default ServiceDetail;

 // const product = details.find(x => x._id === serviceId);
    // console.log(x._id);
    // if (!product) {
    //      <div>Product Not Found</div>
    // }