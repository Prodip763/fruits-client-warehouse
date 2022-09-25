import React from "react";
import useDetails from "../../hooks/useDetails";
import Detail from "../Detail/Detail";

const ManageService = () =>{
    const [details, setDetails] = useDetails();
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?');
        if(proceed){
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const reaminig = details.filter(detail => detail._id !== id);
                setDetails(reaminig);
            })
        }
    }
    return(
        <div className="text-center">
            {
                details.map(detail => <div key={detail._id}>
                    <h3> Product name:    {detail.name}<button className="text-red-500 text-2xl font-bold" onClick={()=>handleDelete(detail._id)}>X</button></h3>
                </div> )
            }
        </div>
    )
};

export default ManageService;