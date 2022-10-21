import React from "react";
import hommy from "../assets/images/home-hero.png"
import arrow from "../assets/images/arrow.png"
import brew from "../assets/images/jebrew-link.png"
import hom from "../assets/images/hom.jpg"
import homm from "../assets/images/homm.jpg"
import {HiArrowNarrowRight} from "react-icons/hi"
import { Link } from "react-router-dom";


const Home = () => {
  return (
     <div className="w-full">
        <section className="pt-[8rem] bg-home bg-cover md:px-[30px] px-[15px] h-screen w-full grid place-items-center">
            <img src={hommy} alt="hommy" />
            <div className="grid w-full px-6 gap-x-4 md:flex md:items-center md:justify-center">
                <Link to="/cafes/geneva" className="flex justify-center sm:justify-start font-bold border border-gray-300 hover:border-yee text-gray-300 font-bold text-xs sm:text-base p-3 group flex items-center gap-3 hover:bg-yee hover:text-white"> DISCOVER BOREAL <HiArrowNarrowRight className="group-hover:translate-x-1 duration-200 text-yee group-hover:text-white"/></Link>
                <Link to="/shop/all" className="flex justify-center sm:justify-start font-bold border border-gray-300 hover:border-yee text-gray-300 font-bold text-xs sm:text-base p-3 group flex items-center gap-3 hover:bg-yee hover:text-white"> VISIT OUR WEBSHOP <HiArrowNarrowRight className="group-hover:translate-x-1 duration-200 text-yee group-hover:text-white"/></Link>
            </div>
            <img src={arrow} alt="arrow" className="group-hover:translate-x-1w h-[4rem] w-[3.5rem]" />
        </section>
        <section className="bg-yee grid place-items-center py-20 px-auto w-full">
            <div className="">
                <h1 className="text-white text-xsm md:text-start text-center mb-1 font-bold uppercase">Boréal Newsletter</h1>
                <h1 className="text-white text-2xl md:text-start text-center font-bold mb-4">SUBSCRIBE TO OUR NEWSLETTER  </h1>
                <form className="flex w-full px-4">
                    <input type="text" placeholder="name@gmail.com" className="placeholder-white duration 300 bg-transparent text-white py-3 pl-2 w-[70%] hover:border-black  border border-r-0" /> 
                    <Link to="/contact" className="border ease-in duration-300 hover:border-black border-gray-300 text-yee bg-white hover:bg-black hover:text-yee border-l-0 pl-2 font-bold text-base py-3 w-[30%] flex items-center justify-center gap-1"> <span className="hidden md:inline-block">SUBSCRIBE</span> <HiArrowNarrowRight size={20} className="text-yee ml-3 cursor-pointer duration-300 hover:text-yee hover:translate-x-2" /></Link>                     
                </form>
            </div>
     </section>
        <section className="grid md:grid-cols-2 w-full">
            <img src={hom} alt="hom" className="w-full h-full object-cover hover:cursor-pointer transfoem"/>
            <div className="md:py-20 md:pl-20 md:pr-7 px-4 flex flex-col items-center py-5 md:items-start">
                <p className="text-black text-2xl md:text-4xl font-bold mb-3">THE STORY OF OUR</p>
                <div className="bg-yee h-1 w-4 mb-6"></div>
                <p className="text-black mb-8">From an abandoned storage space to a convivial
                  meeting place in the heart of Geneva,
                     our first café opened in April 2009 at Rue du Stand 60.
                </p>
                <p >Now in 3 locations in Geneva and 2 locations in Zürich,
                     customers can expect an amazing experience from bean to cup.
                      Boreal Coffee is committed to sourcing the finest quality coffee
                       beans from farmers around the world, directly traded, 
                    and roasted with love each week in our artisanal roastery in Carouge. </p>
                <p className="text-black mb-8">
                Boréal Coffee expose photos of <span className="text-yee"></span>Léonard Fisch.
                </p>
                <Link to="/cafes/geneva" className="group hover:text-yee text-black duration-300 ease-in font-bold flex gap-3 items-center"> DISCOVER OUR CAFES <HiArrowNarrowRight size={20} className="text-yee duration-300 hover:text-black group-hover:translate-x-2 group-hover:text-black " /></Link>     
            </div>
            
            <div className="md:py-20 md:pl-20 md:pr-7 order-last md:order-none px-4 flex flex-col items-center py-5 md:items-start">
                <p className="text-black text-2xl md:text-4xl font-bold mb-3">FROM BEAN TO A CUP</p>
                <div className="bg-yee h-1 w-4 mb-6"></div>
                <p className="text-black mb-8">We opened an artisanal roastery in Carouge where our small team of 
                    dedicated roasters works to match the profiles of the green coffee
                     beans we import with a roast that brings out their best characteri
                     stics.
                </p>
                <p className="text-black mb-8" >And, knowing that we work directly with the farmers t
                    hemselves wherever possible to ensure better liveliho
                    ods while caring for the environment, your beverage i
                    s one to feel good about.
                </p>
                <Link to="/about" className="group hover:text-yee text-black font-bold duration-300 ease-in flex gap-3 items-center"> LEARN ABOUT OUR ROASTERY <HiArrowNarrowRight size={20} className="text-yee duration-300 group-hover:translate-x-2 group-hover:text-black " /></Link> 
            </div>
            <img src={homm} alt="homm" className="w-full h-full object-cover hover:cursor-pointer transfoem"/>
        </section>
        
        <section className="bg-milk bg-cover bg-top py-16 px-5 flex items-center justify-end relative">
        <div className="absolute h-full w-full top-0 left-0 bg-[rgba(0,0,0,0.8)] z-[1]"> </div>
            <div className="md:w-[55%] z-10">
                <h1 className="text-xsm text-yee font-bold ">JEBREW</h1>
                <h1 className="text-3xl md:text-4xl text-white font-bold my-2 hover:text-yee hover:cursor-pointer transition-all duration-300">CAN'T MAKE IT TO BOREAL?</h1>
                <div className="bg-yee h-[3px] w-5"></div>
                <p className="text-white my-4 md:my-7">
                    Can't make it to Boreal? Whether you are looking for a hearty mug
                    of black coffee in the morning or an after-lunch espresso,
                    learn how to brew a perfect cup of coffee for your needs and tastes :
                </p>
                <div className=" lg:border-t lg:border-b grid lg:grid-cols-2 place-items-center h-[5rem]">
                    <img src={brew} alt="brew" className="h-[1.4rem] xs:h-[3rem] md:h-3/4 mb-3 object-cover w-full  px-2 h-[10rem]"/>
                    <p className="text-yee w-full font-bold text-xs md:text-sm lg:border-l mt-3 md:mt-0 md:pl-8 h-full flex items-center group hover:text-white cursor-pointer duration-300">TEACH HOW TO BREW  <HiArrowNarrowRight size={20} className="group-hover:text-yee group-hover:translate-x-1 text-white ml-3 cursor-pointer duration-300 hover:text-yee hover:translate-x-2" /></p>
                </div>
            </div>
        </section>
     </div>
     );
};

export default Home;
