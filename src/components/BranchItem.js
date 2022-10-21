import React from "react";
import {AiOutlineClockCircle} from "react-icons/ai"
import {ImLocation2} from "react-icons/im"
import cup from "../assets/images/cup.png"

const BranchItem = ({back,bannerh1,bannerh2,bannerp,internet,heroh1,heroh2,p1,p2,p3,p4,herobranch,timeh1,cuph1,cuph2,pica,picb,picc,picd,pice,picf, google }) => {
  return (
  
      <div className="w-full">
         <section className={`${back} bg-center bg-cover w-full h-[90vh] relative flex flex-col justify-center items-center`}>
            <div className="absolute h-full w-full top-0 left-0  bg-[rgba(0,0,0,0.6)] z-[1]"> </div>
            <h6 className="text-yee text-center font-extrabold text-lg uppercase z-10"> {bannerh1 && bannerh1} </h6>
            <h1 className="text-white text-center font-bold text-3xl md:text-5xl mb-2 z-10 uppercase"> {bannerh2 && bannerh2} </h1>
            <p className="text-xl text-white text-center z-10"> {bannerp && bannerp} </p>  
         </section>

         <section className="w-full grid place-items-center md:grid-cols-2">
            <img src={require(`../assets/images/${internet}`)} alt="montstore" className="md:order-none order-1 w-full h-full object-cover"/>
            <div className="flex flex-col justify-center items-center md:items-start py-10 lg:py-20 pl-5 lg:pl-20 pr-3 lg:pr-7 order-2  bg-gray-100 md:order-none">
                     <h1 className="text-yee text-sm mb-1 uppercase font-bold">{heroh1 && heroh1}</h1>
                     <h1 className="text-black text-3xl font-bold mb-1 uppercase">{heroh2 && heroh2}</h1>
                     <div className="bg-yee h-1 w-4 mb-6"></div>
                     <p className="text-black mb-8">{p1 && p1}</p>                      
                     <p className="text-black mb-8">{p2 && p2}</p>                      
                     <p className="text-black mb-8">{p3 && p3}</p>                      
                     <p className="text-black mb-8">{p4 && p4}</p>                      
                     <section className="grid md:grid-cols-3 gap-4">
                     <div className="flex flex-col justify-start items-center md:items-start">
                        <p  className="text-black text-sm font-bold mb-2 flex items-center gap-2 uppercase"><ImLocation2 size={25} className="text-yee"/>Address</p>
                        <p  className="text-yee text-sm font-bold mb-2 "> {herobranch && herobranch}</p>  
                     </div>
                     <div className="flex flex-col justify-start items-center md:items-start">
                        <p className="text-black text-sm font-bold mb-2 flex items-center gap-2"><AiOutlineClockCircle size={25} className="text-yee"/>  HOURS</p>
                        <p className="text-black text-sm mb-2">{timeh1 && timeh1}</p>
                        <p  className="text-black text-sm"> <span className="text-black font-bold mb-2">Mon - Fri</span>: 7:00 - 19:00</p>
                        <p  className="text-black text-sm"><span className="text-black font-bold"> Sat - Sun</span>: 8:00 - 19:00</p>
                     </div>
                     </section>
                  </div>
         </section>

         <section className="w-full grid place-items-center py-16">
               <img src={cup} alt="cup" className="w-[4.5rem]"/> 
               <h1 className="text-yee font-bold my-2 text-center uppercase">{cuph1 && cuph1}</h1>
               <h1 className="uppercase font-bold text-3xl text-black text-center hover:text-yee">{cuph2 && cuph2}</h1>
         </section> 

         <section className="w-full grid place-items-center lg:grid-cols-2">
               <div className="w-full h-full ">
                  <iframe style={{width:"100%" , height:"100%"}} title={heroh1} id="gmap_canvas" src={google} frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0">

                  </iframe>
               </div>

               <div className="grid place-items-center sm:grid-cols-2 md:grid-cols-3 h-full">
                     <img src={require(`../assets/images/${pica}`)} alt="monta" className="w-full h-full object-cover hover:cursor-pointer hover:opacity-50 opacity-100 duration-200 ease-in"/>
                     <img src={require(`../assets/images/${picb}`)} alt="montb" className="w-full h-full object-cover hover:cursor-pointer hover:opacity-50 opacity-100 duration-200 ease-in"/>
                     <img src={require(`../assets/images/${picc && picc}`)} alt="montc" className="w-full h-full object-cover hover:cursor-pointer hover:opacity-50 opacity-100 duration-200 ease-in"/>
                     <img src={require(`../assets/images/${picd && picd}`)} alt="montd" className="w-full h-full object-cover hover:cursor-pointer hover:opacity-50 opacity-100 duration-200 ease-in"/>
                     <img src={require(`../assets/images/${pice && pice}`)} alt="monte" className="w-full h-full object-cover hover:cursor-pointer hover:opacity-50 opacity-100 duration-200 ease-in"/>
                     <img src={require(`../assets/images/${picf && picf}`)} alt="montf" className="w-full h-full object-cover hover:cursor-pointer hover:opacity-50 opacity-100 duration-200 ease-in"/>   
               </div>
         </section>  

  </div>
  );
};

export default BranchItem;
