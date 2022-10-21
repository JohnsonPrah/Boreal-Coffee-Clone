
import React from "react";
import { Link ,NavLink} from "react-router-dom";
import Logo from "../assets/images/logg.png"
import Logg from "../assets/images/logo.png"
import {AiFillCaretDown} from "react-icons/ai"
import {MdSupervisorAccount} from "react-icons/md"
import {BsMinecart} from "react-icons/bs"
import {GiBeachBag} from "react-icons/gi"
import {FiMenu} from "react-icons/fi"
import {AiOutlineArrowUp} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import { useState } from "react";



const Navbar = () => {


   const [toggle,setToggle] = useState(false);
   const [scrolled,setScrolled] = useState(false);
   const [drop,setDrop] = useState(false)
   const [shops,setShops] = useState(false)
   const [carts,setCarts] = useState(false)
   const [accounts,setAccounts] = useState(false)
   const [genev,setGenev] = useState(false)
   const [zuric,setZuric] = useState(false)

   const shouldTopbarChange = () => {
    
      if (window.scrollY > 100) {
        setScrolled( true )
      } 
      else setScrolled( false )
  }

 window.addEventListener('scroll',shouldTopbarChange);


  return (
    <nav className={!scrolled ? ' w-full bg-transparent h-[7rem] bg-gray-100 fixed left-0 right-0 top-0 z-50' : ' z-50 w-full h-7rem] fixed left-0 right-0 top-0 bg-gray-100'} >
           <h1 className="mx-5 text-center uppercase text-yellow-900 font-bold pt-2">Check out the latest Boreal in Plainpalais - Rond-Point de Plainpalais 6</h1>
          <section className={!scrolled ? 'py-2 xl:py-0 max-w-[1140px] flex items-center justify-between h-[full] border-b border-gray-100 mx-4 lg:mx-auto':'py-2 xl:py-0 max-w-[1140px] mx-4 lg:mx-auto md:mx-8 flex items-center justify-between h-[full] border-b border-gray-100'}>
              
                  <Link to="/" ><img src={!scrolled ? Logo :Logg} alt="logo" className="w-[4.5rem] md:w-[6rem] b" onClick={()=>setToggle(false)} /> </Link>
                
                  <div className=" hidden xl:flex items-center justify-center text-white h-[5.5rem] relative">
                  <Link to="/about" className={!scrolled ? 'nav ': 'nav-sc' }> WHO WE ARE ?</Link>
                  <div className={!scrolled ? 'h-1/4 w-[1px] bg-white': 'h-1/4 w-[1px] bg-black' } ></div>
                  <Link to="/cafes/geneva" className={!scrolled ? 'loc group': 'loc-sc group' }   onMouseEnter={()=> setDrop(true)} onMouseLeave={()=> setDrop(false)} > LOCATIONS <AiFillCaretDown className="text-yee group-hover:rotate-180 duration-300 ease"/> 
                        {drop && <div className="grid absolute top-[101%] w-[9rem] bg-gee">
                            < NavLink to='/cafes/geneva' className="text-16 text-white font-bold hover:bg-gray py-2 relative hover:bg-yee duration-200 px-2" onClick={()=>setGenev(false)}  onMouseEnter={()=> setGenev(true)} onMouseLeave={()=> setGenev(false)}> GENEVA 
                                {genev && <div className="grid absolute top-0 left-[100%] w-[10rem] bg-gee">
                                    <NavLink to='/cafes/geneva/rue-du-stand' className='text-16 text-white font-bold hover:bg-gray py-2 hover:bg-yee duration-200 px-2' onClick={()=>setDrop(false)}> RUE DU STAND </NavLink >    
                                    <NavLink to='/cafes/geneva/mont-blanc-bis' className="text-16 text-white font-bold hover:bg-gray px-2 py-2 hover:bg-yee duration-200 flex justify-center" onClick={()=>setDrop(false)}> MONT BLANC 17 </NavLink >
                                    <NavLink to="/cafes/geneva/plainpalais" className="text-16 text-white font-bold hover:bg-gray py-2 hover:bg-yee duration-200 px-2" onClick={()=>setDrop(false)}> PLAINPALAIS </NavLink >   
                              </div>} 
                            
                            </NavLink >    
                            <NavLink to='/cafes/zurich' className="text-16 text-white font-bold hover:bg-gray px-2 py-2 hover:bg-yee duration-200 relative" onClick={()=>setDrop(false)}  onMouseEnter={()=> setZuric(true)} onMouseLeave={()=> setZuric(false)} > ZURICH     
                                {zuric && <div className="grid absolute top-0 left-[100%] w-[9rem] bg-gee">
                                    <NavLink to='/cafes/zurich/talacker' className="text-16 text-white font-bold hover:bg-gray py-2 hover:bg-yee duration-200 px-2" onClick={()=>setDrop(false)}> TALACKER </NavLink >    
                                    <NavLink to='/cafes/zurich/oerlikon' className="text-16 text-white font-bold hover:bg-gray px-2 py-2 hover:bg-yee duration-200" onClick={()=>setDrop(false)}> OERLIKON  </NavLink >
                                </div>}                  
                            </NavLink >
                        </div>} 
                  </Link>
                      <div className={!scrolled ? 'h-1/4 w-[1px] bg-white': 'h-1/4 w-[1px] bg-black' } ></div> 
                  <Link to="/shop/all" className={!scrolled ? 'sh group': 'sh-sc group' }  onMouseEnter={()=> setShops(true)} onMouseLeave={()=> setShops(false)} > SHOP <AiFillCaretDown className="text-yee group-hover:rotate-180 duration-300 ease"/>
                          {shops && <div className="grid absolute top-[101%] ml-8 w-[8rem] bg-gee">
                            < NavLink to='/shop/beans' className="text-16 text-white font-bold hover:bg-gray px-1 py-2 hover:bg-yee duration-200" onClick={()=>setDrop(false)}> BEANS </NavLink >    
                            <NavLink to='/shop/merchants' className="text-16 text-white font-bold hover:bg-gray px-1 py-2 hover:bg-yee duration-200" onClick={()=>setDrop(false)} > MERCHANDISE </NavLink >
                          </div>}
                  </Link>
                      <div className={!scrolled ? 'h-1/4 w-[1px] bg-white': 'h-1/4 w-[1px] bg-black' } ></div>
                  <Link to="/catering" className={!scrolled ? 'nav ': 'nav-sc' }> COFFEE CATERING </Link>
                      <div className={!scrolled ? 'h-1/4 w-[1px] bg-white': 'h-1/4 w-[1px] bg-black' } ></div>
                  <Link to="/contact" className={!scrolled ? 'nav ': 'nav-sc' } > CONTACT </Link>
                      <div className={!scrolled ? 'h-1/4 w-[1px] bg-white': 'h-1/4 w-[1px] bg-black' } ></div>
                  <Link className={!scrolled ? 'caf group': 'caf-sc group' }  onMouseEnter={()=> setCarts(true)} onMouseLeave={()=> setCarts(false)} > <BsMinecart className="group-hover:text-yee"/> CART 
                          {carts && <div className="grid absolute top-[101%] ml-8 w-[20rem] border  bg-gee text-center py-3 px-5">
                            < NavLink to='/beans' className="text-sm text-white font-bold hover:bg-gray px-1 py-2 hover:bg-yee duration-200" onClick={()=>setDrop(false)}> CART IS EMPTY</NavLink >    
                          </div>}
                  </Link>
                  <div className={!scrolled ? 'h-1/4 w-[1px] bg-white': 'h-1/4 w-[1px] bg-black' } ></div>
                  <Link  className={!scrolled ? 'acc group': 'acc-sc group' }   onMouseEnter={()=>setAccounts(true)} onMouseLeave={()=>setAccounts(false)}> <MdSupervisorAccount /> ACCOUNT <AiFillCaretDown className="text-yee group-hover:rotate-180 duration-300 ease"/> 
                          {accounts && <div className=" absolute top-[101%] mr-[8rem] py-2 w-[14rem] bg-gee gap-2 flex border flex-col items-center justify-center px-2">
                            < p className="text-16 text-white font-bold hover:bg-gray px-1 py-2 hover:bg-yee duration-200 w-full border-b" onClick={()=>setDrop(false)}> ORDERS </p  >    
                            <p className="text-16 text-white font-bold hover:bg-gray px-1 py-2 hover:bg-yee duration-200 self-start" onClick={()=>setDrop(false)}> TRACK MY ORDER(S)</p  >
                            <input type="text" className="py-3 text-base w- full px-3 font-normal" placeholder="Order ID/Email"/>
                            <button className="text-white py-3 mx-auto border-2 hover:bg-yee w-full hover:border-yee">SIGN IN</button>
                            <button className="text-white py-3 mx-auto hover:bg-gray-500 bg-yee w-full">REGISTER</button>
                          </div>}   
                  </Link>
                  </div>  
                  <div className="flex items-center justify-center text-white xl:hidden h-full">
                      <button className={!scrolled ? 'text-white p-2 border-white': 'text-black p-2 border-black' }><GiBeachBag size={25}/></button>
                      <div className={!scrolled ? 'h-1/4 w-[1px] bg-white' : 'h-1/4 w-[1px] bg-black' } ></div>   
                      <button className={!scrolled ? 'text-white p-2 border-white': 'text-black p-2 border-black' }><BsFillPersonFill size={25}/></button>
                      <div className={!scrolled ? 'h-1/4 w-[1px] bg-white' : 'h-1/4 w-[1px] bg-black' } ></div> 
                      <button onClick={()=>setToggle(!toggle)} className={!scrolled ? 'text-white p-2 border-white': 'text-black p-2 border-black' } ><FiMenu size={25}/></button>
                  </div> 
                    {toggle && (<div className="flex flex-col items-start justify-center px-5 bg-gee text-white absolute top-[100%] overflow-y-scroll left-0 w-full">
                      <Link to="/about" onClick={()=>setToggle(false)} className="py-7 font-bold border-b-[1px] w-full"> WHO WE ARE?</Link>
                      <Link to="/cafes/geneva" onClick={()=>setToggle(false)} className="py-7 font-bold border-b-[1px]  w-full"> LOCATIONS  </Link>
                      <Link to="/shop/all" onClick={()=>setToggle(false)} className="py-7 font-bold border-b-[1px] w-full "> SHOP </Link>
                      <Link to="/catering" onClick={()=>setToggle(false)} className="py-7 font-bold border-b-[1px] w-full"> COFFEE CATERING </Link>
                      <Link to="/contact" onClick={()=>setToggle(false)} className="py-7 font-bold border-b-[1px] w-full"> CONTACT </Link>
                      <button onClick={()=>setToggle(false)} className="text-white flex py-7 flex-col justify-center items-center self-center"> <AiOutlineArrowUp size={30}/> Close Menu</button>
                  </div>)
                }
      </section>
</nav>
  );
};

export default Navbar;
