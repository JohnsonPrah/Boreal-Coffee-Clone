
import React from "react";
import map from "../assets/images/zurich.png"
import mapp from "../assets/images/mapp.png"
import scroll from "../assets/images/scroll.png"
import { Link } from "react-router-dom";
import {HiArrowNarrowRight} from "react-icons/hi"
import {gen,zu} from "./LocationData"
import { useNavigate,useParams } from 'react-router-dom';


const Loc = () => {

    let navigate = useNavigate();
    let {cities} = useParams();

    const choice = "text-center border-b-[5px] border-b-yee cursor-pointer text-white uppercase text-3xl md:text-4xl lg:text-5xl font-bold outline-none"
    const notChoice = "text-center cursor-pointer hover:border-b-yee hover:border-b-[5px] text-white uppercase text-3xl md:text-4xl lg:text-5xl outline-none font-bold"


  return (
     <div className="w-full">
         <section className="w-full min-h-screen bg-zurich bg-cover bg-center flex flex-col items-center justify-center pt-[18rem] md:pt-[13rem] bg-center">
            <img src={cities === 'geneva' ? map : mapp} alt="map" className="w-1/2 mx-auto hidden md:block"/>
            <h1 className="text-yee mb-2 text-lg text-center uppercase font-bold">choose between our locations</h1>
            <div className="flex items-center justify-center mb-[12rem] md:mb-0  flex-wrap sm:flex-nowrap">
                <button className={cities === "geneva" ? choice : notChoice} onClick={()=>navigate('/cafes/geneva')}>Geneva</button>
                <span className="text-white mx-5 uppercase font-bold">or</span>
                <button className={cities === "zurich" ? choice : notChoice} onClick={()=>navigate('/cafes/zurich')}>zurich</button>
            </div>
            <img src={scroll} alt="scroll" className="w-[10rem] my-3"/>
        </section>

       
            {cities === "geneva" && (gen.map(({display,hone,htwo,pa,anchor,id,internet,idclas,divclas})=>(
                 <section className="grid place-items-center md:grid-cols-2 w-full" key={id}>
                    <img src={require(`../assets/images/${display}`)} alt={hone} className={`md:order-none order-1 w-full h-full object-cover ${idclas}`}/>
                    <div className={`${divclas} lg:items-start h-full w-full flex flex-col items-center justify-center py-16 lg:py-0 pl-5 lg:pl-20 pr-3 lg:pr-7 bg-gray-100 order-2 md:order-none`}>
                       <h1 className="uppercase text-yee text-sm mb-1 font-bold">{hone}</h1>
                       <h1 className="text-black text-3xl font-bold mb-1 hover:text-yee hover:cursor-pointer duration-200 ease-in uppercase">{htwo}</h1>
                       <div className="bg-yee h-1 w-4 mb-6"></div>
                       <p className="text-black mb-8">{pa}</p>                
                       <Link to={internet} className="uppercase duration-300 text-black font-bold flex gap-3 items-center group hover:text-yee"> {anchor} <HiArrowNarrowRight className="text-yee group-hover:text-black group-hover:translate-x-1 duration-300"/> </Link>     
                     </div>
                </section > 
            )))}

            {cities === "zurich" && (zu.map(({display,hone,htwo,pa,anchor,id,internet,idclas,divclas})=>(
                <section className="grid place-items-center md:grid-cols-2 w-full" key={id}>
                    <img src={require(`../assets/images/${display}`)} alt={hone} className={`md:order-none order-1 w-full h-full object-cover ${idclas}`}/>
                    <div className={`${divclas} lg:items-start h-full w-full flex flex-col items-center justify-center py-16 lg:py-0 pl-5 lg:pl-20 pr-3 lg:pr-7 bg-gray-100 order-2 md:order-none`}>
                       <h1 className="uppercase text-yee text-sm mb-1 font-bold">{hone}</h1>
                       <h1 className="text-black text-3xl font-bold mb-1 hover:text-yee hover:cursor-pointer duration-200 ease-in uppercase">{htwo}</h1>
                       <div className="bg-yee h-1 w-4 mb-6"></div>
                       <p className="text-black mb-8">{pa}</p>                
                       <Link to={internet} className="uppercase duration-300 text-black font-bold flex gap-3 items-center group hover:text-yee"> {anchor} <HiArrowNarrowRight className="text-yee group-hover:text-black group-hover:translate-x-1 duration-300"/> </Link>     
                     </div>
                </section > 
            )))}
            
           
        
         
     </div>
  );
};

export default Loc;