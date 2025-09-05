import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import { products } from "../assets/assets.js";

const LatestCollection = () => {

    const { products } = useContext(ShopContext);

    console.log(products);
    

  return (
    <div>
        
    </div>
  )
}

export default LatestCollection