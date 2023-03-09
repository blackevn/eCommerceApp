import { client, urlFor } from "lib/sanityClient"
import { useRouter } from 'next/router'
import Image from "next/image";
import { Button, ProductCard } from "components";
import { faArrowAltCircleRight, faCartPlus, faMinusCircle, faPlusCircle, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Carousel from "react-multi-carousel";
import Link from "next/link";
import { useState } from "react";
import { useAppContext } from "context/AppContext";

const ProductsDetails = ({ product: { image, name, details, price }, products, product }) => {

  const [ index, setIndex ] = useState(0);

  const { increaseQuantity, decreaseQuantity, quantity, addToCart, handleToggle } = useAppContext()

  const buyNow = () => {

    addToCart(product, quantity)
    handleToggle()

  }

    return <>
  
    <div className="bg-base-100 dark:bg-gray-800 text-gray-600 dark:text-gray-200 ">

        <div className="max-h-fit w-screen bg-base-100 dark:bg-gray-800 grid place-items-center text-gray-600 dark:text-gray-200 p-6">

          <div className="md:flex gap-8 justify-between space-y-6">

            <div className="grid place-items-center space-y-6">

              <div className="w-full grid place-items-center">
            
                <img className="max-h-[300px]" src={urlFor(image[index])}/>

              </div>
              
            <div className="flex space-x-4 max-w-[400px] overflow-x-scroll">

              { image?.map((item, i) => (

                <div key={i} className="cartItem">
                  
                  <img src={urlFor(item)} onMouseEnter={() => setIndex(i)}  className="max-h-[70px]"  />

                </div>

             ))}

            </div>

            </div>

            <div className="w-[400px] grid justify-between min-h-full space-y-6">

                <p className="text-2xl font-medium">{name}</p>  

                <p className="pr-4 lg:p-0">{details}</p>

                <div className="flex-col flex justify-between">
                  
                <p className="flex gap-2 text-lg font-black">${price}</p>

               
                <div className="flex gap-4 flex-wrap lg:flex-nowrap m-0 p-0">

                <div className="flex gap-2 items-center">

                <Button clickEvent={decreaseQuantity} text="" modifier="btn tooltip tooltip-bottom" tip="Reduce quantity" icon={faMinusCircle}/>

                <h2>{quantity}</h2>

                <Button clickEvent={increaseQuantity} text="" modifier="btn tooltip tooltip-bottom" tip="Increase quantity" icon={faPlusCircle}/>

                </div>

                <div className="flex gap-2">

                <Button clickEvent={() => addToCart(product, quantity) } modifier="btn" text="Add to cart" icon={faCartPlus} />
          
                <Button clickEvent={buyNow} modifier="btn" text="Buy now" icon={faArrowAltCircleRight}/>
                
                </div>


                </div>

                </div>


            </div>

          </div>

        </div>

        <h1 className="otherProductsTitle">Other products</h1>

        <div className="bg-base-100 dark:bg-gray-800 text-gray-600 dark:text-gray-200 ">

           <Carousel

                additionalTransfrom={0}
                arrows
                autoPlay
                autoPlaySpeed={4000}
                centerMode={false}
                className=""
                containerClass="container-with-dots"
                customTransition="all 1s linear"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                pauseOnHover
                renderArrowsWhenDisabled={false}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 5,
                    partialVisibilityGutter: 40
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464
                    },
                    items: 3,
                    partialVisibilityGutter: 30
                  }
                }}
                rewind={false}
                rewindWithAnimation={false}
                rtl={false}
                shouldResetAutoplay
                showDots={false}
                sliderClass=""
                slidesToSlide={2}
                swipeable
                transitionDuration={1000}
              >
              {products.map(product => (

                <Link key={product._id} href={`/products/${product.slug.current}`}>

                      <ProductCard 
                        name={product.name} 
                        price={product.price} 
                        image={product.image[0]}
                        clickEvent={() => addToCart(product, quantity)}
                        />
                        
                </Link>

              ))}

              </Carousel>

        </div>

        </div>


    </>

}

export async function getStaticProps({ params: { slug } }) {
  
  const productsQuery = `*[_type == "product" && slug.current == "${slug}"][0]`

  const product = await client.fetch(productsQuery)

  const query = `*[_type == "product"]`

  const products = await client.fetch(query)

  return{
    props: { products, product }
  }
}

export const getStaticPaths = async () => {

  const query = `*[_type == "product"] {

    slug {
      
      current

    }

  }`

  const products = await client.fetch(query)

  const paths = products.map( product => ({

    params: {

      slug: product.slug.current

    }

  }))

  return {

    paths,
    fallback: "blocking",
    
  }
  
}
  

export default ProductsDetails
