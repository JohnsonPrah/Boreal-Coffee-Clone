import React from "react";
import {all} from "./products"
import {FaHandsHelping} from "react-icons/fa"
import { useState,useEffect } from "react";
import {useParams} from "react-router-dom"
import Item from "./Item";
import {AiOutlinePlus} from "react-icons/ai"
import {AiOutlineMinus} from "react-icons/ai"
import lol from "../assets/images/picb.png"

const ProductDetail = () => {

    const[product,setProduct] = useState({})
    const [score,setScore] = useState(0)
   
    const {productId} = useParams();

    const handleAdd = () => {
      if(score <= 9 ){setScore((prev) => prev + 1)}
    }
    const handleMinus = () => {
      if(score > 0)setScore((prev) => prev - 1)
    
    }


    useEffect(()=>{
        const jay = all.filter((j)=>(j.id === parseInt(productId)))
        const jayt = jay[0]
        setProduct(jayt)
    },[product,productId])
     

  return (
    <div className="w-full pb-[10rem]">
       <section className="w-full mb-[3rem] bg-shopbg bg-cover bg-center relative h-[13rem]">
           <div className="absolute h-full w-full top-0 left-0 bg-[rgba(0,0,0,0.6)]"> </div>
      </section>
       <div className="grid place-items-center md:grid-cols-2 max-w-[1140px] mx-auto relative">

             
            <img src={lol} alt={product.title} className="bg-transparent uppercase object-cover h-2/3 mt-[10rem] md:mt-0 w-2/3 md:w-auto" />
                    
            <div className="w-full px-6 lg:px-0 flex flex-col">
                <h6 className="text-black mb-2 leading-7 uppercase text-center md:text-start absolute top-16 md:relative md:top-0 md:self-start self-center "> weight :350G </h6>
                <h6 className="text-black mb-2 font-bold text-2xl md:text-3xl lg:text-5xl uppercase text-center md:text-start absolute top-0 md:relative md:top-0 md:self-start self-center"> {product.title} </h6>
                <h1 className="text-yee font-bold uppercase text-2xl mb-12 text-center md:text-start absolute top-24 md:relative md:top-0 md:self-start self-center">{product.price}<span className="text-lg">CHF</span><span className="text-xs uppercase">incl. vat</span></h1>
                <div className="flex flex-col gap-2 md:flex-row items-center justify-between mb-6">
                <p className="text-black uppercase font-semibold"> overview</p> 
                <p className="flex items-center justify-center text-yee uppercase mr-4 md:mr-0"> <FaHandsHelping size={25} className='mr-2'/> learn about direct trade</p>  
            </div>  
            <p className="text-black mb-4 uppercase font-bold">{product.title} <span className="font-normal lowercase"> is making a comeback! </span></p>
            <p className="text-black mb-4">Our roasting experts have put this one under the microscope, donned their lab coats and undertaken the Herculean task of improving this great coffee by engineering a new roasting profile to extract an array of bold flavour of Bergamot citrus aromas and a volley of intense herbal flavours, notably Jasmine and White tea.</p>
            <h4 className=" text-black mb-8">Aromatic profile : citrus, bergamot, jasmine, white tea.</h4>
            <h6 className="text-blacl mb-2">Altitude: 1800-2000 meters</h6>
            <h6 className="text-blacl mb-2">Region: Sidama, Ethiopia</h6>
            <h6 className="text-blacl mb-2">Variety: Arabica // Heirloom</h6>
            <h6 className="text-blacl mb-2">Treatment: Washed</h6>
            <h6 className="text-blacl mb-2">Roast Level : Light roast for filter</h6>
            <div className="w-full h-12 md:h-20 border-t border-b mt-10 mb-2 border-gray-600 flex items-center justify-between">
                <p className="text-[.5rem] font-bold sm:text-lg xs:text-base text-black h-full grid place-items-center uppercase w-[25%] ">quantity:</p>
                <span className="h-full w-[1px] bg-gray-600"></span>
                <p className="text-[.5rem] sm:text-lg xs:text-base font-bold text-black h-full grid place-items-center  w-[20%] ">{score}</p>
                <div className="h-full w-[1px] bg-gray-600"></div>
                <p className="w-[20%] h-full grid place-items-center border-l">
                  <button onClick={handleAdd} className="text-black h-full w-full grid place-items-center outline-none"> <AiOutlinePlus size={18}/> </button>
                  <span className="h-[1px] w-full bg-gray-600"></span>
                  <button onClick={handleMinus} className="text-black h-full w-full grid place-items-center outline-none"> <AiOutlineMinus size={18}/> </button>
                </p>
                <span className="h-full w-[1px] bg-gray-600"></span>
                <p className="text-[.5rem] sm:text-lg xs:text-base text-black h-full grid place-items-center font-bold uppercase w-[35%]">ADD TO CART</p>
            </div>
            <p className="text-center text-gray-600 text-sm">Roasts & ships from our Geneva roastery on Tuesdays</p>
            </div>
            </div>
              
                      <section className="w-full flex flex-col mt-[5rem] items-center">
                      <p className="text-sm text-center text-yee uppercase font-bold">Our dear coffee loving customer, perhaps you would be</p>
                      <h1 className="uppercase text-3xl text-gray-800 font-extrabold text-center">interested in some of our amazing coffees ?</h1>
                      <div className="grid place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-[5rem]">
                          <Item price={13.49} title="mamma mia's bio" brand="beans" loc="picc.png" id={4} className=""/>
                          <Item price={59.99} title="hario v60 ceramic kit" brand="merchandise" loc="picd.jpg" id={5} className=""/>
                          <Item price={13.49} title="temamesa" brand="beans" loc="pick.jpg" id={12} className=""/>
                          <Item price={16.59} title="decaf,peru" brand="beans" loc="picf.png" id={7} className=""/>
                       </div>
                      </section>
    </div>
  );
};

export default ProductDetail;
