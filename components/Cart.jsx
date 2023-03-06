import { faCartShopping, faTrash, faXmark, faMinusCircle, faPlusCircle, faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useAppContext } from "context/AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { urlFor } from "lib/sanityClient";
import { getStripe } from "lib/getStripe";
import { toast } from "react-hot-toast";
import { useState } from "react";

export const Cart = () => {

  const {adjustItemQuantity,
         handleToggle, 
         totalQuantities, 
         removeCartItem, 
         cartItems, 
         totalPrice, 
         clearCart } = useAppContext()

const [ stripeData, setStripeData ] = useState("")


  const handleCheckout = async () => {

    const stripe = await getStripe()

    const response = await fetch("/api/stripe", {

      method: "POST",
      headers: {

        "Content-Type" : "application/json"

      },

      body: JSON.stringify(cartItems)

    })

    if (response?.statusCode === 500) return

    const data = await response?.json()

    toast.loading("Please wait...")

    if(!data) {

      console.log("No data found");

    } else {

      setStripeData(data)
    
    }
    
    
    stripe.redirectToCheckout({sessionId: data.id})


  }

    console.log(stripeData);

  return <>

    <div className="cart">

      <div className="flex justify-between items-center">

        <p className="text-3xl font-black">Cart</p>

        <Button modifier="text-2xl md:text-3xl" clickEvent={handleToggle} text="" icon={faXmark} />

      </div>

        <p>You have { totalQuantities } item{ totalQuantities === 1 ? "" : "s"} in your cart</p>

       
    {!cartItems?.length ? <div className=" w-full h-full grid place-items-center">

                          <div className="grid place-items-center gap-6">

                            <FontAwesomeIcon className="text-7xl" icon={faCartShopping}/>
                          
                            <p>No items in cart</p>
                          
                          </div>

                        </div> 

                        :

                        <div className="overflow-y-scroll overflow-x-hidden min-h-[100%] max-h-[100%] space-y-4 pt-8">

                          { cartItems?.map( cartItem  => (

                            <div key={cartItem?._id} className="flex gap-4 justify-between items-center relative">

                              <div className="flex gap-6">

                              <div className="cartItem">

                                <img src={urlFor(cartItem?.image[0])} alt={cartItem?.name} className="max-h-[70px]"/>

                              </div>

                              <div className="flex flex-col justify-between">

                              <p>{cartItem?.name}</p>

                              <div className="flex gap-2 items-center ">

                                  <Button clickEvent={() => adjustItemQuantity(cartItem?._id, "decrease")} text="" modifier="btn tooltip" tip="Reduce quantity" icon={faMinusCircle}/>

                                    <h2>{cartItem?.cartQuantity}</h2>

                                  <Button clickEvent={() => adjustItemQuantity(cartItem?._id, "increase")} text="" modifier="btn tooltip" tip="Increase quantity" icon={faPlusCircle}/>

                                </div>

                              </div>

                              </div>
                            
                                  <p className="text-right font-bold absolute top-0 right-0">${cartItem?.price} {cartItem?.cartQuantity > 1 && `x ${cartItem?.cartQuantity}`} </p>

                                  <Button clickEvent={() => removeCartItem(cartItem)} icon={faTrash} text="" tip="Remove" modifier="bg-red-500 bg-opacity-5 min-w-[46px] text-red-500 absolute bottom-0 right-0 tooltip tooltip-left p-0 m-0"  paddingX="px-0"  paddingY="py-0"/>

                            </div>

                          )) }


                        <div className="absolute bottom-0 flex justify-between items-center w-full pb-4 md:pb-2 bg-base-100 dark:bg-gray-800 text-gray-600 dark:text-gray-200">

                        <p className="font-bold px-2 rounded-md bg-gray-300 dark:bg-gray-900">Total ${totalPrice}</p>

                        <div className="flex">

                          <Button clickEvent={clearCart} text="Clear cart" icon={faTrash} modifier="text-red-500  " />
                          
                          <Button clickEvent={handleCheckout} text="Checkout" icon={faArrowAltCircleRight} modifier="text-blue-500 mx-4 " />
                          
                        </div>

                        </div>
                          
                        </div>
   
      }

      
    </div>



  </>
};


