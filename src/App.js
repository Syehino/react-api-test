import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const url = 'http://128.199.190.225:3000/api/products/type/main'
  const [product,setProduct] = useState(null)

  let content = null

  useEffect(() => {
    axios.get(url).then(response => {
      setProduct(response.data)
    })
  },[url]) 

  if(product)
    content = 

    product.map((product, key) =>

    <div class="responsive">
        <div class="gallery">
          <a target="_blank" href={product.image}>
          <li className="crop"><img src={product.images} alt={product.name}/></li>
          <div class="desc">{product.descriptions}</div>
          <div><a>Course: </a>{product.type}</div>
          <div><a>Price:RM </a>{product.price}</div>
          </a>
            
        </div>
    </div>
    )

  return(
    <div>{content}</div>
  )
  
}

export default App;
