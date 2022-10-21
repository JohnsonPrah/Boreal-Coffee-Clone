import React from "react";
import tripple from "../assets/images/tripple.png"
import mastercard from "../assets/images/mastercard.png"
import visa from "../assets/images/visa.png"
import paypal from "../assets/images/paypal.png"
import post from "../assets/images/post.png"
import logo from "../assets/images/logo.png"
import map from "../assets/images/map.png"
import {HiArrowNarrowRight} from "react-icons/hi"
import {BsInstagram} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import {AiFillYoutube} from "react-icons/ai"



const Footer = () => {
  return (
  <section className="w-full">
    
     <div className="bg-gee px-5 w-full flex flex-col md:flex-row py-8 lg:py-2 items-center md:gap-16 md:px-10 md:justify-between lg:px-40">
        <img src={tripple} alt="tripple" className="w-[12rem] h-[7rem] lg:relative lg:-bottom-6"/>
        <div className="justify-item-end">
            <p className="text-yee font-extrabold text-center text-xs mb-1 uppercase">Like what you see? Curious to taste our lovingly roasted beans?</p>
            <p className="text-md text-center md:text-lg duration-200 font-bold text-white uppercase hover:text-yee cursor-pointer">Take a piece of Boreal home with you. This way to our e-shop</p>
        </div>
    </div>

    <article className=" md:grid md:grid-cols-2 lg:grid-cols-3 mt-7 mb-3 xl:grid-cols-4 border-b border-gray-500  max-w-[1140px] mx-auto">
        <div className="h-full hidden xl:grid border-r border-gray-500 place-items-center">
           <img src={logo} alt="logo" className=" h-[5rem] object-cover mx-auto my-auto "/>
        </div>
        <div className="hidden lg:block border-r p-4 border-gray-500 h-full">
            <h1 className="text-gray-800 font-bold ">FIND US</h1>
            <div className="flex items-center gap-4 justify-center">
                <div>
                   <p className="text-gray-700 text-sm ">We have 3 shops in Geneva and 2 in Zurich</p>
                   <p className="text-yee mt-4 text-sm flex items-center gap-2">Discover them <HiArrowNarrowRight className="text-yee"/></p>
                </div>
                <img src={map} alt="map" className="w-1/2 object-cover h-2/3"/>
            </div>       
        </div>

        <div className=" hidden md:block border-r p-4 border-gray-500 h-full">
            <h1 className="text-gray-800 font-bold">SUPPORT</h1>
            <div className="grid place-items-start  grid-cols-2 gap-5 place-content-end">
                <div>
                    <p className="text-gray-700 text-sm ">Cafe</p>
                    <p className="text-gray-700 text-sm ">Coffee</p>
                    <p className="text-gray-700 text-sm ">Jebrew</p>
                    <p className="text-gray-700 text-sm ">Leonard Ffisch</p>
                </div>
                <div>
                    <p className="text-gray-700 text-sm ">Shop</p>
                    <p className="text-gray-700 text-sm "> Terms & Conditions</p>
                    <p className="text-gray-700 text-sm ">Contact</p>
                </div>
            </div>
        </div>

        <div className="border-b">
            <div className="border-b-2 border-gray grid grid-cols-2 ">
                <div className="flex justify-between p-4 pl-3 gap-2 items-center border-r-2 ">
                    <p className="font-semibold text-gray-700 hidden xs:block">LANGUAGE</p>
                    <select className="text-yee ">
                        <option value="EN" >EN</option>
                    </select>
                </div>  
                    
                <div className="flex justify-between p-4 pl-3 gap-2 items-center">
                    <p className="font-semibold text-gray-700 hidden xs:block"> CURRENCY</p>
                    <select className="text-yee " >
                        <option value="EN" >EN </option>
                    </select>
                </div>
            </div>

            <div className="flex justify-between gap-3 items-center p-3">
                <p className="font-semibold text-gray-700">FOLLOW US:</p>
                <div className="flex gap-2">
                    <FaFacebookF className="text-gray-700 cursor-pointer"/>
                    <BsInstagram className="text-gray-700 cursor-pointer"/>
                    <AiFillYoutube className="text-gray-700 cursor-pointer"/>
                </div>
            </div>
        </div>
 </article>
 
 <div className="flex flex-col lg:grid items-center justify-start gap-2 md:grid-cols-2 py-2  max-w-[1140px] mx-auto lg:px-4 xl:px-0">
        <p className="text-gray-700 text-sm text-center md:text-start"> Copyright &copy; 2015 - 2022 Boreal Coffee Shop. All rights reserved.</p>
        <div className="flex gap-2 justify-center md:justify-start">
            <img src={visa} alt="visa" className="h-[1.5rem]"/>
            <img src={mastercard} alt="mastercard" className="h-[1.5rem]"/>
            <img src={post} alt="post" className="h-[1.5rem]"/>
            <img src={paypal} alt="paypal" className="h-[1.5rem]"/>
        </div>
    </div>
   
 </section>
  );
};

export default Footer;
