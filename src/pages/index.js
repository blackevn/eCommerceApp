import { Header, ProductSection }  from "../../components";
import { client } from "lib/sanityClient";

const index = ({product, banner}) => {
  return <>
            <div className="box-border w-screen ">

              <Header banner={banner}/>

              <ProductSection product={product}/>

            </div>
  
         </>
};

export const getStaticProps = async () => {

  const productsQuery = `*[_type == "product"]`
  const product = await client.fetch(productsQuery)

  const bannerQuery = `*[_type == "banner"]`
  const banner = await client.fetch(bannerQuery)

  return{
    
    props: {banner, product}
  }

}

export default index;
