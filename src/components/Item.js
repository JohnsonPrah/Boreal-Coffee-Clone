import React from "react";
import { Link } from "react-router-dom";

const Item = ({price,title,brand,loc,id}) => {
  return (
     <Link to={`/product/${id}`} className="flex flex-col ">
         <img src={require(`../assets/images/${loc}`)} alt={title} className="bg-transparent uppercase object-cover h-2/3"/>   
         <h2 className="mt-4 font-bold text-black text-center text-lg uppercase ">{title}</h2>
         <h2 className="text-yellow-700 font-bold text-center">{price} CHF</h2>
         <h2 className="text-center  text-black font-medium uppercase">{brand}</h2>          
    </Link>
  );
};

export default Item;
