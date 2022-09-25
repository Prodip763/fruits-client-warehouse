import React from "react";

const Footer = () =>{
    return(
        <div className="bg-pink-200 mt-5">
            <div className=" md:flex justify-around">
                <div>
                    <h2 className="mb-2 font-bold">SERVICES</h2>
                    <p>Branding</p>
                    <p>Design</p>
                    <p>Marketing</p>
                    <p>Advertisement</p>
                </div>
                <div>
                    <h2 className="mb-2 font-bold mt-3">COMPANY</h2>
                    <p>About Us</p>
                    <p>Contact</p>
                    <p>Jobs</p>
                    <p>Press Kit</p>
                </div>
                <div>
                    <h2 className="mb-2 font-bold mt-3">LEGAL</h2>
                    <p>Terms of Condition</p>
                    <p>Privacy policy</p>
                    <p>Cookie policy</p>
                </div>
            </div>
            <h3 className="text-center mt-2">Copyright @ 2022</h3>
        </div>
    );
};

export default Footer;