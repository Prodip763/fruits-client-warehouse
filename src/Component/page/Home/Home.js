import React from "react";
import { Icon } from '@iconify/react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ServiceDetails from "../../service/ServiceDetails/ServiceDetails";
import './Home.css';

const Home = () => {

    return (
        <div className="container mx-auto mt-4">
            <div className="flex items-center justify-around bg-yellow-600 rounded-2xl">
                <p><small>ALL CATEGORIES ITEMS</small></p>
                <label className="flex items-center">
                    <input type="text" name="search" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="SEARCH THE PRODUCTS" />

                </label>
                <div className="flex items-center gap-3 ">
                    <Icon icon="flat-color-icons:missed-call" />
                    <div>
                        <p><small>CALL US NOW:</small></p>
                        <p>01609447218</p>
                    </div>

                </div>
            </div>
            <Carousel className="mt-2">
                <div>
                    <img src={'https://img.freepik.com/free-photo/dried-organic-fruits-assortment_114579-49402.jpg?size=626&ext=jpg&ga=GA1.2.86413933.1642213775'} />
                    <p className="legend">Fruits Masala</p>
                </div>
                <div>
                    <img src={'https://img.freepik.com/free-photo/pineapple-juice-splash-background_1355-66.jpg?size=626&ext=jpg&ga=GA1.2.86413933.1642213775'} />
                    <p className="legend">Pineapple Juice</p>
                </div>
                <div>
                    <img src={'https://img.freepik.com/free-photo/strawberries-whipped-cream-ice-cream-glass-wooden-table_123827-20378.jpg?size=626&ext=jpg&ga=GA1.2.86413933.1642213775'} />
                    <p className="legend">FrutiIce</p>
                </div>
            </Carousel>
            <ServiceDetails></ServiceDetails>
            <div className="mt-3 md:flex items-center  gap-3 ">
                <div >
                    <img className="w-44" src={'https://img.freepik.com/free-vector/cash-delivery-concept_23-2148798392.jpg?w=900&t=st=1663653879~exp=1663654479~hmac=31e95e0c4d20ba6a4efcb249e079affdc3fb31d5f608bcc3f65ec52e69a0249f'}></img>
                    <h5 className="font-bold">CASH ON DELIVERY</h5>
                    <p><small>Cash on delivery, sometimes called collect on delivery or cash on demand, is the sale of goods by mail order where payment is made on delivery rather than in advance. If the goods are not paid for, they are returned to the retailer.</small></p>
                </div>
                <div >
                    <img className="w-44" src={'https://img.freepik.com/free-vector/free-shipping-concept-illustration_114360-2308.jpg?w=900&t=st=1663656890~exp=1663657490~hmac=1ddf8f041ded458d3db89dd5f93ed0d030a9fe54ee03d397bac833f7812c1575'}></img>
                    <h5 className="font-bold">FREE SHIPPING</h5>
                    <p><small>Free shipping is a marketing tactic used primarily by online vendors and mail-order catalogs as a sales strategy to attract customers.</small></p>
                </div>
                <div >
                    <img className="w-36" src={'https://t4.ftcdn.net/jpg/02/80/34/83/240_F_280348359_Zf8z7kpiQ2pTohjPwYWAGtupdfZ5STQr.jpg'}></img>
                    <h5 className="font-bold">MONEY BACK GUARANTEE</h5>
                    <p><small>A money-back guarantee, also known as a satisfaction guarantee, is essentially a simple guarantee that, if a buyer is not satisfied with a product or service, a refund will be made.</small></p>
                </div>
            </div>
            <div className="mt-3  gap-2 md:flex" >
                <div className="containe" >
                    <img className="rounded-xl h-full" src={"https://img.freepik.com/free-photo/close-up-photo-fresh-citrus-fruits-whole-half-cut_114579-64449.jpg?size=626&ext=jpg&ga=GA1.2.86413933.1642213775"}></img>
                    <div className="centered">
                        <h2 className="text-2xl">PEACH</h2>
                        <p><small>When it comes to Lemon, our mind remembers Washington automatically</small></p>
                    </div>
                </div>
                <div >
                    <div className="containe">
                        <img className="rounded-xl  md:h-48 sm:mt" src={"https://img.freepik.com/free-photo/tasty-ripe-sweet-healthy-blackberry_114579-11249.jpg?size=626&ext=jpg&ga=GA1.2.86413933.1642213775"}></img>
                        <div className="top-right text-green-800">
                            <h2 className="text-2xl">AVAILABLE</h2>
                            <p><small>Treat yourself to dishes made up of exotic fruits and cherish the eccentric taste of this fruit</small></p>
                        </div>
                    </div>
                    <div className="containe mt-2">
                        <div className="border rounded-xl w-full bg-orange-500  " >
                            <div className="mt-8 mb-8">
                            <p className="text-xl ">50% off</p>
                            <small className="text-black">Time limited!! Only Friday to Sunday</small><br></br>
                            <small>10AM - 12Am</small>
                            </div>
                        </div>
                        {/* <img className="rounded-xl h-48 " src={"https://img.freepik.com/free-photo/tasty-ripe-sweet-healthy-blackberry_114579-11249.jpg?size=626&ext=jpg&ga=GA1.2.86413933.1642213775"}></img>
                        <div className="top-right text-green-800">
                            <h2 className="text-2xl">AVAILABLE</h2>
                            <p><small>Treat yourself to dishes made up of exotic fruits and cherish the eccentric taste of this fruit</small></p>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;

//style={{backgroundImage: `url("https://img.freepik.com/free-photo/close-up-photo-fresh-citrus-fruits-whole-half-cut_114579-64449.jpg?size=626&ext=jpg&ga=GA1.2.86413933.1642213775")` }}