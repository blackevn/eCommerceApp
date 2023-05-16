import ProductCard from "./ProductCard";
import Link from "next/link";
import { useAppContext } from "context/AppContext";

const ProductSection = ({ product }) => {

const { addToCart, quantity, singleProduct } = useAppContext()

const smartWatches = product.filter(item => item.category === "Smart watch")

console.log(smartWatches);
  return <>

            <div className="w-full grid gap-4 place-items-center bg-base-100 dark:bg-gray-800 text-gray-600 dark:text-gray-200">

              {/* Products */}

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

              {product.map(item => (

                <Link key={item._id}  href={`/products/${item.slug.current}`}>

                  <ProductCard 
                               product={item} 
                               image={item?.image[0]} 
                               name={item.name}
                               price={item.price}
                               clickEvent={() => addToCart(item, quantity)}
                    />

                </Link>

              )).slice(0,4) }

            </div>

            {/* Smart watches */}

              <h1>Smart watches</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {smartWatches.map( item => (
               
                 <ProductCard 
                              product={item} 
                              image={item?.image[0]} 
                              name={item.name}
                              price={item.price}
                              clickEvent={() => addToCart(item, quantity)}
                   />

              ))}
            </div>

            </div>


       
         </>

}

export default ProductSection;
