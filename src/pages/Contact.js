import React from "react";
import cup from "../assets/images/cup.png"
import {HiArrowNarrowRight} from "react-icons/hi"
import {BsDot} from "react-icons/bs"
import {Link} from "react-router-dom"



const Contact = () => {
  return (
       <div className="w-full">
           <section className="bg-contact bg-cover bg-center w-full h-[90vh] flex flex-col relative justify-center items-center">
              <div className="absolute h-full w-full top-0 left-0 bg-[rgba(0,0,0,0.6)]"> </div>
              <h6 className="text-yee text-center z-10 font-extrabold text-lg uppercase">Get in touch with</h6>
              <h1 className="text-white text-center uppercase z-10 font-bold text-4xl md:text-5xl lg:text-6xl mb-2">Boréal Coffee</h1>
              <p className="text-xl text-center z-10 text-white mb-">Email us or find us on social media (or better yet, stop by and say hello!)</p>
           </section>
           <section className="grid md:grid-cols-2 w-full">
            <div className="bg-form px-4 md:pl-28 md:pr-10 pt-20 pb-6">
              <h6 className=" text-yee mb-1 font-extrabold text-sm uppercase">Developing talent at Boréal</h6>
              <h1 className=" text-white text-4xl font-bold mb-4">Work with us !</h1>
              <div className="w-5 h-1 bg-yee mb-8"></div>
              <p className=" text-white mb-3">Are you passionate about coffee? Do you enjoy working in a young, dynamic environment?</p>
              <p className=" text-white mb-3">Whether you already have experience in specialty coffee and barista talents or are interested in honing them, get in touch with us. We are growing quickly and frequently open to new talents.</p>
              <p className=" text-white mb-5">Before sending us your CV please make sure you that you fulfill the following requirements :</p>
              <ul>
                <li className="text-white mb-2 flex items-center justify-start"><BsDot size={30} className="text-yee mx-"/> You are available the weekends (you will not work every weekend) and at least three half days in the week</li>
                <li className="text-white mb-2 flex items-center justify-start"><BsDot size={30} className="text-yee -mx-2"/>You are looking to work for at least one year</li>
                <li className="text-white mb-2 flex items-center justify-start"><BsDot size={30} className="text-yee -mx-2"/>You can work a minimum of 20 hours per week</li>
              </ul>
              <p className=" text-yee mb-3 mt-4 font-bold uppercase">If you want to join the team, please send us your best resume</p>
              <p  className=" text-white mb-"><span className="text-yee">E :</span> jobs@borealcoffee.ch</p>
            </div>

            <div className="py-4 lg:pl-28 lg:pr-10 xl:pl-28 md:pr-4 md:pt-20 bg-gray-100 px-4 flex flex-col">
              <div className="flex flex-col items-center justify-center md:items-start">
              <h1 className="text-yee mb-2 font-bold">BOREAL COFFEE</h1>
              <p className="font-bold text-4xl text-black text-center md:text-start mb-2">CONTACT FORM</p>
              <div className="w-5 h-1 bg-yee"></div>
              </div>
      
              <form action="#" className="grid lg:grid-cols-2 gap-4 mt-8 ">
                <div className="w-full">
                   <label htmlFor="first" className="w-full">First Name</label>
                   <div className="w-full"> <input type="first" className="w-full border outline-none p-1"/> </div>
                </div>
                <div>
                   <label htmlFor="last">Last Name</label>
                   <div> <input type="last" className="w-full border outline-none p-1"/> </div>
                </div>

                <div className="w-full">
                   <label htmlFor="email" className="w-full">Email</label>
                   <div className="w-full"> <input type="email" className="w-full border outline-none p-1"/> </div>
                </div>
                <div>
                   <label htmlFor="phone">Phone</label>
                   <div> <input type="phone" className="w-full border outline-none p-1"/> </div>
                </div>

              </form>
              <textarea className="w-full mt-4 outline-none"></textarea>
              <button className="bg-yee text-white w-full md:w-1/3 hover:bg-gee duration-150 md:self-end grid place-items-center mt-4 p-2 font-bold text-lg">SEND</button>

            </div>

           </section>

            <section className="flex flex-col items-center py-16 justify-center w-full ">
              <img src={cup} alt="cup" className="w-[4rem]"/>
              <h1 className="text-yee my-2 font-bold uppercase text-center">DISCOVER THE BORÉAL COFFEE SHOPS</h1>
              <h1 className="text-4xl text-black font-bold uppercase hover:text-yee duration-150 text-center">Across and beyond Geneva</h1>
            </section>
            <section className="px-6 flex py-10 md:py-32 bg-cto bg-cover w-full flex-col items-center justify-center relative">
               <div className="absolute h-full w-full top-0 left-0  bg-[rgba(0,0,0,0.6)]"> </div>
               <h1 className="text-yee mb-1 hover:text-white uppercase font-bold text-md text-center z-10">No matter if you are in beautiful geneva or stunning zurich </h1>
               <h1 className="text-3xl font-bold text-white mb-6 uppercase text-center z-10">a perfect coffee cup always awaits for you</h1>
               <Link to="/shop/all" className="text-white uppercase flex  gap-2 items-center font-bold text-lg text-center z-10 group hover:text-yee">discover our shop locations <HiArrowNarrowRight size={20} className="text-yellow-700 group-hover:text-white group-hover:translate-x-1 duration-200"/> </Link>
            </section>

        </div>
        );
};

export default Contact;
