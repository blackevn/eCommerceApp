import { loadStripe } from "@stripe/stripe-js";

let stripePromise

const key = " pk_test_51MffnvHzurdT78JO55yhnYSFD0OuDMp7fCrdpx9PuP1RntEeSxIvFKxbWAM6HIoACgBtgspRB33iGCzQiZp5kBSQ00pwEg8jQg"

const getStripe = () => {
    
    if(!stripePromise) {
        
        // stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)
        stripePromise = loadStripe(key)
        
    }

    return stripePromise

}

export { getStripe }