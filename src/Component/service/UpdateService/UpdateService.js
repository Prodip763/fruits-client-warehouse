import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const UpdateService = () =>{
    const { id } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
            
    }, [])
    const { register, handleSubmit } = useForm();

    const handleUpdateUser = e =>{
            e.preventDefault();
            const name = e.target.name.value;
            const balance = e.target.balance.value;
            const about = e.target.about.value;
            const picture = e.target.picture.value;
            const supplierName = e.target.supplierName.value;
            const amount = e.target.amount.value;

            const updatedUser = {name, balance, about, picture, supplierName, amount};
            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedUser)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                alert('User update successfully');
                e.target.reset();
            })
    };
    return(
        <div>
            <h2>ManageService of this product: {service.name}</h2>
            <form className="flex flex-col items-center mt-4" onSubmit={handleUpdateUser}>
                <input name="name" placeholder="Product Name" className="w-96 text-center mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" {...register("name", { required: true, maxLength: 20 })} />
                <input name="balance" placeholder="Product Price" className="w-96 text-center mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"  {...register("balance")} />
                <textarea name="about" placeholder="Product Description" className="w-96 text-center mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" {...register("about")} />
                <input name="picture" placeholder="Product Image URL" className="w-96 text-center mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" type='text' {...register("picture")} />
                <input name="supplierName" placeholder="Supplier Name" className="w-96 text-center mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" {...register("supplierName")} />
                <input name="amount" placeholder="Quantity" className="w-96 text-center mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" type="number" {...register("amount", { min: 18, max: 99 })} />
                <input className="mt-4 items-center  bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" type="submit" value='Update Product' />
                
            </form>
        </div>
    )
};

export default UpdateService;