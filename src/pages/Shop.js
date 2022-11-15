import React from "react";
import Item from "../components/Item"
import {HiArrowNarrowRight} from "react-icons/hi"
import {all,beans,mant} from "../components/products" 
import {useState,useEffect} from "react"
import { useParams,useNavigate,Link} from "react-router-dom";



const Shop = () => {

    let navigate = useNavigate();
    let {logo} = useParams();

    const [prod,setProd] = useState('')
    
    const choice = "outline-none border-b-[2px] h-full border-b-yee text-yee font-bold cursor-pointer px-2 hover:text-yee  "
    const notChoice = "outline-none text-gray-600 h-full font-bold cursor-pointer px-2 hover:text-yellow-700 "

    useEffect(()=>{     if(prod === "all"){navigate('/shop/all')}
    else if(prod === "beans"){navigate('/shop/beans')}
    else if(prod === "merchants"){ navigate('/shop/merchants')}

    },[prod,navigate])
    

     useEffect(()=>{ 
        if(logo === 'all'){setProd('all');navigate('/shop/all')}
        else if(logo === 'beans'){setProd('beans');navigate('/shop/beans')}
        else if(logo === 'merchants'){setProd('merchants');navigate('/shop/merchants')}

        return ()=>{setProd('')}
     },[logo,navigate])
    

  return (
     <div className="w-full">
        <section className="w-full bg-shopbg bg-cover bg-center relative h-[13rem]">
           <div className="absolute h-full w-full top-0 left-0 bg-[rgba(0,0,0,0.6)]"> </div>
        </section>
        <section className="max-w-[1140px] mx-auto px-12 flex flex-col items-center justify-center py-20">
            <h1 className="text-center mb-2 text-lg text-yee uppercase font-bold">Our dear coffee loving customer, perhaps you would be</h1>
            <h2 className="text-center uppercase hover:text-yee text-4xl text-black font-bold mb-10">interested in some of our amazing coffees?</h2>
            <p className="text-center flex items-center justify-center gap-2">
                <span className="hidden md:inline-block text-black px-2 font-bold"> SORT PRODUCTS BY : </span>
                <button onClick={()=>{setProd("all")}} className={(prod === "all") ? `${choice}` :`${notChoice}` } >ALL</button>
                    <span className='h-6 w-[2px] bg-black' ></span> 
                <button onClick={()=>{setProd("beans")}} className={(prod === "beans") ? `${choice}` :`${notChoice}` } >BEANS</button>
                    <span className='h-6 w-[2px] bg-black' ></span>
                <button onClick={()=>{setProd("merchants")}} className={(prod === "merchants") ? `${choice}` :`${notChoice}` } >MERCHANDISE</button>
            </p>
        </section>


        <section className="max-w-[1140px] mb-20 mx-auto grid place-items-center sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 px-6 ">
            {prod === "all" && (all.map((blog) => (
                <Item price={blog.price} title={blog.title} brand={blog.brand} loc={blog.loc} id={blog.id} key={blog.title} />
            )))
            }
            
            {prod === "beans" && (beans.map((blog) => (
                <Item price={blog.price} title={blog.title} brand={blog.brand} loc={blog.loc} id={blog.id} key={blog.title} />
            )))
            }

            {prod === "merchants" && (mant.map((blog) => (
                <Item price={blog.price} title={blog.title} brand={blog.brand} loc={blog.loc} id={blog.id} key={blog.title} />
            )))
            }
        </section>
          

        <section className="w-full grid place-items-center md:grid-cols-2" >   
            <div className="bg-yee flex flex-col justify-center md:items-start items-center py-16 px-10 w-full">
                    <h1 className="text-white text-start md:text-center text-xs mb-1 uppercase font-bold">Boréal Newsletter</h1>
                    <h1 className="text-white text-center md:text-start text-2xl font-bold mb-4">SUBSCRIBE TO OUR NEWSLETTER  </h1>
                    <form className="flex w-full">
                        <input type="text" placeholder="name@gmail.com" className="px-4 w-[70%] border-r-0 bg-transparent text-white py-3 hover:border-black  border" /> 
                        <p className="border border-l-0 w-[30%] hover:border-black border-gray-300 duration-300 text-yee bg-white hover:bg-black hover:text-yee font-bold text-xs cursor-pointer sm:text-base py-3 px-2 flex items-center justify-center"> <span className="hidden md:inline-block">SUBSCRIBE</span> <HiArrowNarrowRight size={20} className="text-yee ml-3 cursor-pointer duration-300 hover:text-yee hover:translate-x-2" /></p>                     
                    </form>
            </div>

            <div className="bg-shopcto py-6 bg-cover flex flex-col items-center justify-center w-full h-full md:py-10">
                <h1 className="text-white text-sm text-center font-bold mb-2 uppercase">You prefer to buy your coffee in person?</h1>
                <h1 className="md:px-8 text-white text-xl lg:text-4xl text-center font-bold mb-3 uppercase hover:text-yee duration-200" >just visit one of our shops</h1>
                <Link to="/cafes/geneva" className="group duration-200 ease-in border hover:border-yee border-gray-300 text-white bg-transparent hover:bg-yee hover:text-white font-bold text-large py-3 px-8 flex items-center justify-center gap-2 uppercase">discover boreal <HiArrowNarrowRight size={20} className="text-yee ml-3 cursor-pointer duration-300 group-hover:text-white group-hover:translate-x-2" /></Link>                        
            </div>
        </section>

     </div>
  );
};

export default Shop;
