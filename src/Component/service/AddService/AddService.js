import { Result } from "postcss";
import React from "react";
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
    };
    return (
        <div>
            <h3 className="text-pink-400 text-2xl text-center border-2 rounded-md">Add New Item</h3>
            <form className="flex flex-col items-center mt-4" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Product Name" className="w-96 text-center mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder="Product Price" className="w-96 text-center mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"  {...register("balance")} />
                <textarea placeholder="Product Description" className="w-96 text-center mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" {...register("about")} />
                <input placeholder="Product Image URL" className="w-96 text-center mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1" type='text' {...register("picture")} />
                <input placeholder="Supplier Name" className="w-96 text-center mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" {...register("supplierName")} />
                <input placeholder="Quantity" className="w-96 text-center mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" type="number" {...register("amount", { min: 18, max: 99 })} />
                <input className="mt-4 items-center  bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded" type="submit" />
            </form>
        </div>
    );
};

export default AddService;