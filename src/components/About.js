import React from "react";
import article from "../assets/images/article.jpg"


const About = () => {
  return (  
    <div className="w-full">
      <section className="bg-aboutbg bg-cover bg-center relative h-[90vh] flex items-center justify-center flex-col w-full">
            <div className="absolute h-full w-full top-0 left-0  bg-[rgba(0,0,0,0.6)] z-[1]"> </div>
            <h1 className="text-yee text-lg font-bold  z-10"> WHO ARE WE ?</h1>
            <p className="text-white font-bold text-lg z-10">Find out more about Boréal</p>
       </section>

       <section className="bg-gray-200 mx-4 xl:max-w-[1140px] xl:mx-auto">
        <div className="px-4 md:px-24 py-16">
          <div className="flex flex-col justify-center items-center md:items-start">
            <h1 className="text-yee text-sm font-bold">BOREAL COFFEE</h1>
            <h1 className="text-black mb-3 text-3xl font-bold">BORN IN GENEVA</h1>
            <div className="bg-yee w-8 h-1 mb-5"></div>
           
          </div>
            <div className="text-black mb-5"> Article and photo : &copy; Clement Grandjean</div>
            <img src={article} alt="article" className="object-cover md:w-1/2"/>
        </div>
       </section>
      
    </div>
    );
};

export default About;
