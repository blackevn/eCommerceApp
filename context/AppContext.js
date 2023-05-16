import { useState, createContext, useContext, useEffect } from "react";
import { toast } from "react-hot-toast";

const AppStateContext = createContext()

export const AppContext = ( { children, product: singleProduct } ) => {

  
  let foundProduct
  let index
 

  const [ toggle, setToggle ] = useState(false)
  const [ cartItems, setCartItems ] = useState([])
  const [ totalPrice, setTotalPrice ] = useState(0)
  const [ totalQuantities, setTotalQuantities ] = useState(0)
  const [ quantity, setQuantity ] = useState(1)


  useEffect(() => {
          
    localStorage.setItem("cartItems", JSON.stringify(cartItems))
    localStorage.setItem("totalQuantities", JSON.stringify(totalQuantities))
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice))
  
  }, [cartItems]); 

  
  useEffect(() => {
         
    const cartItems = JSON.parse(localStorage.getItem("cartItems"))
    const cartPrice = JSON.parse(localStorage.getItem("totalPrice"))
    const quantities = JSON.parse(localStorage.getItem("totalQuantities"))

    setTotalQuantities(quantities)
    setTotalPrice(cartPrice)
    setCartItems(cartItems)

  }, []);

 
  const handleToggle = () => {
  
    setToggle(prev => !prev)
  
  }

  const increaseQuantity = () => {

    setQuantity( prevQty => prevQty + 1)

}

const decreaseQuantity = () => {

  setQuantity( prevQty => {

    if( prevQty - 1 < 1 ) return 1

    return prevQty - 1

})

}



const adjustItemQuantity = ( id, value ) => {

  foundProduct = cartItems?.find( item => item._id === id )
  index = cartItems?.findIndex( product => product._id === id )

  const newCartItems = cartItems?.filter( item => item._id !== id )

  if( value === "increase") {

    setCartItems([ { ...foundProduct,
                 cartQuantity: foundProduct.cartQuantity + 1 },  ... newCartItems])

    setTotalPrice( prevTotalPrice => prevTotalPrice + foundProduct.price)

    setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1 )

  } else if ( value === "decrease") {

    if(foundProduct.cartQuantity > 1 ) {

      setCartItems([{ ...foundProduct,   cartQuantity: foundProduct.cartQuantity - 1 },  ... newCartItems])

      setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price)

      setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)

    }

  }

}

const removeCartItem = ( product ) => {

  foundProduct = cartItems?.find(item => item._id === product._id)

  const newCartItems = cartItems?.filter(item => item._id !== product._id)

  setTotalPrice(prevTotalPrice => prevTotalPrice - foundProduct.price * foundProduct.cartQuantity)

  setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.cartQuantity)

  setCartItems(newCartItems)
}

const clearCart = () => {

  setCartItems([])
  setTotalPrice(0)
  setTotalQuantities(0)
  localStorage.clear("cartItems")

}

const addToCart = ( product, cartQuantity ) => { 

const checkProductInCart = cartItems?.find(item => item._id === product._id)

setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * cartQuantity)

setTotalQuantities(prevTotalQuantities => prevTotalQuantities + cartQuantity)

if(checkProductInCart) {

    const updatedCartItems = cartItems?.map( cartItem => {

        if(cartItem?._id === product._id) return {

            ...cartItem, cartQuantity: cartItem.cartQuantity + cartQuantity 

        }

    })

    setCartItems(updatedCartItems)
    
} else {
    
    product.cartQuantity = cartQuantity 
    
    setCartItems([ ...cartItems,  { ...product }])
    
}

toast.success(`${quantity} ${product.name} added to cart`)

console.log(cartItems);

}

  return  <AppStateContext.Provider value={{ toggle,
                                             handleToggle,                                            
                                             cartItems,
                                             totalPrice,
                                             totalQuantities,
                                             quantity,
                                             increaseQuantity,
                                             decreaseQuantity,
                                             addToCart,
                                             adjustItemQuantity,
                                             removeCartItem,
                                             clearCart,
                                             singleProduct
                                             
                                             }}>

            { children }

          </AppStateContext.Provider>
};

export async function getStaticProps({ params: { slug } }) {
  
  const productsQuery = `*[_type == "product" && slug.current == "${slug}"][0]`

  const product = await client.fetch(productsQuery)

  const query = `*[_type == "product"]`

  const products = await client.fetch(query)

  return{
    props: { products, product }
  }
}


export const useAppContext = () => useContext(AppStateContext)

