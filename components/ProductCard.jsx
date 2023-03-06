import React from "react";
import { urlFor } from "lib/sanityClient";
import Button from "./Button";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";



const ProductCard = ({image, name, price, clickEvent }) => {

  return <>

                    <div>

                            <div className="hover:backdrop-blur-md hover:card w-60 h-60 hover:shadow-xl p-4 flex flex-col justify-between">

                                <div className="w-full grid place-items-center p-2">

                                    <img className="h-32" src={urlFor(image)} alt="" />

                                </div>

                                <div className="">

                                    <p>{name}</p>

                                    <p>{price}</p>


                                </div>

                                    <Button modifier="absolute" text="" icon={faCartPlus} clickEvent={clickEvent}/>
                            </div>

                    </div>

       
         </>

}

ProductCard.defaultProps = {

    name: "Product name",
    price: "$$$",


}

export default ProductCard;
