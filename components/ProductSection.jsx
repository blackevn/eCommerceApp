import ProductCard from "./ProductCard";
import Link from "next/link";
import { useAppContext } from "context/AppContext";

const ProductSection = ({ product }) => {

const { addToCart, quantity, singleProduct } = useAppContext()



  return <>

            <div className="w-full grid gap-4 place-items-center bg-base-100 dark:bg-gray-800 text-gray-600 dark:text-gray-200">

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

              )) }

            </div>

            </div>
       
         </>

}

export default ProductSection;
