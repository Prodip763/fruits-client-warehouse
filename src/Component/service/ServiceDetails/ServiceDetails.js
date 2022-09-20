import React from "react";
import useDetails from "../../hooks/useDetails";
import Detail from "../Detail/Detail";

const ServiceDetails = () => {
    const [details] = useDetails();
    return (
        <div>
            <h2 className="font-bold text-3xl text-center">Fruits Juices</h2>
            <p className="text-center text-slate-400"><small >AT vero eos et accusamus et iusto dignissimos</small></p>
            <div className="md:grid grid-cols-3 m-6 gap-2 ">
                {
                    details.map(detail => <Detail key={detail._id} detail={detail}></Detail>)
                }
            </div>
        </div>
    );


};

export default ServiceDetails;

