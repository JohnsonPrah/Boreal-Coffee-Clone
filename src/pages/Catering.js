import React from "react";
import cup from "../assets/images/cup.png"
import a from "../assets/images/a.jpg"
import b from "../assets/images/b.jpg"
import c from "../assets/images/c.jpg"
import e from "../assets/images/e.jpg"
import d from "../assets/images/d.jpg"
import oven from "../assets/images/oven.jpg"
import seeds from "../assets/images/seeds.jpg"
import isco from "../assets/images/isco.jpg"
import {HiArrowNarrowRight} from "react-icons/hi"
import {Link} from "react-router-dom"


const Catering = () => {
  return (
    <div className="w-full">
        <section className="bg-catering bg-cover bg-center flex items-center justify-center flex-col h-[95vh] relative w-full">
            <div className="absolute h-full w-full top-0 left-0  bg-[rgba(0,0,0,0.6)]"> </div>
            <h1 className="text-yee text-xl md:text-lg font-bold text-center z-10 uppercase"> Boréal at your next event</h1>
            <p className="text-white font-bold text-md md:text-xl text-center z-10">Make speciality coffee a feature of your next trade show or personal event</p>      
        </section>  
        <section className="grid place-items-center md:grid-cols-2 w-full">
          <img src={isco} alt="isco" className=" order-1 w-full h-full object-cover md:order-none"/>
          <div className="py-20 px-6 md:pl-20 md:pr-7 flex flex-col order-2 md:order-none bg-gray-100 w-full ">
                <h1 className="text-yee text-sm mb-2 text-center md:text-start">FROM INCEPTION TO EXECUTION</h1>
                <h1 className="text-black text-3xl font-bold mb-3 text-center md:text-start">BESPOKR EVENTS CATERINGS</h1>
                <div className="bg-yee h-1 w-4 mb-6 self-center md:self-start"></div>
                <p className="text-black mb-8">From an abandoned storage space to a convivial
                    You are organizing an event and wish to offer your guests good
                    coffee ? Then,
                    you knocked on the right door !
                </p>
                <p className="text-black mb-8" >
                Whether planning a conference, corporate off-site or a wedding, Boreal is a coffee specialist and offers only the best in terms of coffee-catering. Also thanks to its experience in this field since 2009, Boréal is highly qualified for serving all the coffee-based beverages (Espresso, Americano, Flat White, Latte Macchiato...)
                </p>
          </div>

            <div className="w-full py-20 flex flex-col px-6 md:pl-20 md:pr-7 order-4 md:order-none bg-gray-100 auto">
                <h1 className="text-yee text-sm text-center md:text-start">WORKING ONLY WITH THE BEST SINCE 2008</h1>
                <p className="text-black text-3xl font-bold mb-3 text-center md:text-start">LA MARZOCCO</p>
                <div className="bg-yee h-1 w-4 mb-6 self-center md:self-start"></div>
                <p className="text-black mb-6">
                   La Marzocco is our partner for coffee machines. These hand-made machines in Florence are amongst the best in the Specialty Coffee world.
                </p>
                <p className="text-black mb-6">
                  La Marzocco was from 2000 to 2008 the official sponsor for the World Barista Championship (WBC), the most prestigious international competition that celebrates the coffee culture around the world.
                </p>
                <p className="text-black mb-6">
                   We set up our coffee machines in your environment. All the technical specifications regarding the coffee machines will be provided to you prior to the event.
                 </p>
             </div>
             <img src={oven} alt="oven" className=" order-3 w-full h-full object-cover md:order-none"/>

             <img src={seeds} alt="seeds" className=" order-5 w-full h-full object-cover md:order-none"/>
            <div className="w-full py-24 flex flex-col px-6 md:pl-20 md:pr-7 order-6 md:order-none bg-gray-100 auto">
                    <p className="text-yee text-sm font-bold mb-3 text-center md:text-start">EXPLORE OUR COMPLETE OFFERING</p>
                    <h1 className="text-black font-bold text-4xl mb-4 text-center md:text-start">BOREAL CATERINGS</h1>
                    <div className="bg-yee h-1 w-4 mb-6 self-center md:self-start"></div>
                    <p className="text-black mb-5">
                        <span className="border-r-2 text-amber-600 pr-2">Coffee beans</span> <span className="border-r-2 pr-2">Drinks on offer</span> <span className="border-r-2 pr-2">Expertly trained baristi</span> <span className="border-r">Coffee passion</span>
                    </p>

                    <p className="text-black mb-5">
                    We provide all of our catering clients with direct sourced, freshly roasted coffee beans of high quality.
                    </p> 
                    <p className="text-black ">
                    We always select coffee beans in our offers. On request, we can also work with pure specific origins.
                   </p>
           </div>
            
        </section > 
           
        <section className="grid place-items-center py-16 w-full">
            <img src={cup} alt="cup" className="w-[4.5rem]"/> 
            <h1 className="text-yee font-bold my-2 text-center">PHOTOS FROM OUR CATERINGS</h1>
            <h1 className="uppercase font-bold text-3xl text-black text-center hover:text-yee">happy customers, successful events</h1>
        </section> 
        <section className="grid place-items-center lg:grid-cols-2 w-full">
            <div className="lg:pt-24 pt-10 pb-10 lg:pb-32 px-6 bg-yee flex flex-col items-center justify-center lg:items-start w-full">
               <h1 className="text-white text-center mdtext-start font-bold text-4xl">REQUEST AN OFFER</h1>
               <div className="bg-white w-6 h-1 my-2"></div>
               <p className="text-white text-lg mb-6 text-start">
                 We are super flexible and can cater to your specific needs - from building a complete coffee stand to providing 'only' Geneva's best baristas for professional coffee extraction and late art.
               </p>
               <Link to="/contact" className="text-white text-center md:text-start font-bold flex gap-1 hover:text-black duration-200 items-center group">EMAIL US HERE FOR A QUOTATION <HiArrowNarrowRight className="group-hover:text-white text-black  group-hover:translate-x-1 duration-300"/></Link>
            </div>

            <div className="w-full grid place-items-center sm:grid-cols-2 md:grid-cols-3 h-full">
                 <img src={a} alt="a" className="w-full h-full object-cover hover:cursor-pointer hover:opacity-50 opacity-100 duration-200 ease-in"/>
                 <img src={b} alt="b" className="w-full h-full object-cover hover:cursor-pointer hover:opacity-50 opacity-100 duration-200 ease-in"/>
                 <img src={c} alt="c" className="w-full h-full object-cover hover:cursor-pointer hover:opacity-50 opacity-100 duration-200 ease-in"/>
                 <img src={d} alt="d" className="w-full h-auto object-cover hover:cursor-pointer hover:opacity-50 opacity-100 duration-200 ease-in"/>
                 <img src={e} alt="e" className="w-full h-full object-cover hover:cursor-pointer hover:opacity-50 opacity-100 duration-200 ease-in"/>
                 <img src={oven} alt="oven" className="w-full h-full object-cover hover:cursor-pointer hover:opacity-50 opacity-100 duration-200 ease-in"/>
            </div>
        </section>  
    </div>
  );
};

export default Catering;
