import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useDetails from "../../hooks/useDetails";

const ServiceDetail = () => {
    const [details, setDetails] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setDetails(data));
    } ,[])
    console.log(details);
    const { serviceId } = useParams();
    

    

    // const product = details.find(x => x._id === serviceId);
    // // console.log(x._id);
    // if (!product) {
    //     return <div>Product Not Found</div>
    // }

    // const product = detail.find(x => x._id === serviceId);
    // console.log(product);
    // if (!product) {
    //     return <div>Product Not Found</div>
    // }
    return (
        <div>
            <h2>detail:{serviceId}</h2>
        </div>
    );
};

export default ServiceDetail;