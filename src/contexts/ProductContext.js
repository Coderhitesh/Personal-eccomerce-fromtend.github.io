import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext()

const ProductProvider = ({children}) => {
  const [products,setProducts] = useState([])

  useEffect(()=>{
    const fechproduct = async()=>{
      const response = await axios.get('https://fakestoreapi.com/products')
      setProducts(response.data)
      // console.log(response.data) 
    }
    fechproduct()
  },[])
  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>
};

export default ProductProvider;
