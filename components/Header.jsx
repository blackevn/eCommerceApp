import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "./Button";
import ArrowButton from "./ArrowButton";
import { urlFor } from "lib/sanityClient";
import Link from "next/link";
import { faArrowCircleLeft, faArrowCircleRight, faEye } from "@fortawesome/free-solid-svg-icons";

const Header = ({banner}) => {

       
const responsive = {

    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
      
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 250
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      
    }

  }


  return <>

        <div className="grid place-items-center w-full bg-base-100 dark:bg-gray-800">

        <Carousel
                    additionalTransfrom={0}
                    arrows
                    partialVisible
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className="w-full h-full my-8"
                    dotListClass=""
                    responsive={responsive}
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
                    rewind={false}
                    rewindWithAnimation={false}
                    shouldResetAutoplay
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                   
                    >
      
                    
                   {banner.map(ban => (

               
                          <div key={ban._id} className={`header`} >

                            <div className="bannerBG">

                              <p className="text-7xl font-black bg-clip-text text-transparent opacity-50 bg-gradient-to-r from-pink-500 to-violet-500">{ban.product}</p>

                            </div>

                            <div className="w-full md:w-[50%] h-full grid place-items-center ">

                              <div className="space-y-4 w-full grid place-items-center">

                                <div className="space-y-4">

                                <h1 className="headerProductName">{ban.product}</h1>

                                <p className="w-full sm:max-w-md text-xl text-gray-400 font-bold">Nulla aliquip esse nulla officia. Sunt ad cillum irure officia elit exercitation veniam. </p>
                             
                                <Button icon={faArrowCircleRight} text={ban.buttonText} modifier="btn"/>

                                </div>
                           
                              </div>
                        
                            </div>
                        
                            <div className="grid place-items-center h-full w-full md:w-[50%] p-8">
                         
                             <img className="max-h-[500px]" src={urlFor(ban.image)} alt={ban.product} />
                        
                            </div>
                       
                          </div>
                   
                   ))}
                   
               
        </Carousel>

        </div>
  
        </>
};

export default Header;
