import React, { useState, useEffect } from 'react';
import PrductCard from './ProductCard';

const App = () => {
    var [data, setData] = useState([]);

  
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
            .then(json => setData(json))
            .catch(error => console.error('Error fetching data:', error));
         
     
    }, []); // Empty dependency array ensures the effect runs only once after the initial render
   const  allItems=data;

    let handelMens=()=>{
        setData(data.filter(data =>  data.category=="men's clothing"))
      

    } 

   
    let handelAll=()=>{
      setData(allItems)
      
      
    }


    return (
      <>
    <center> <nav><button className='nav-bar' onClick={handelAll}>view All items</button><button className='nav-bar' onClick={handelMens}>men's clothing</button> <button className='nav-bar'>women's clothing</button> <button className='nav-bar'>jewelery</button> <button className='nav-bar' >Electronics </button></nav></center> 
      
      <div className='mainContainer'>

      
          {data.map((product, index) => (
               <PrductCard key={index} rating={product.rating.rate}   image={product.image} price={product.price} category={product.category}  title={product.title} description={product.description} ></PrductCard>
            ))}
      </div>
      </>
    );
};

export default App;