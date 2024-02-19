import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product'

const Home = () => {
  const {products} = useContext(ProductContext)

  const filteredProducts = products.filter(item=>{
    return item.category === "men's clothing" || item.category === "women's clothing"
  })

  console.log(filteredProduct)
  return <div>
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid'>
          {filteredProducts && filteredProducts.map((item,index)=>(
            <Product />
          ))

          }
        </div>
      </div>
    </section>
  </div>
};

export default Home;
