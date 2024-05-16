import { useState } from "react";


const PrductCard=(data)=>{


    
    return(<>   
        
      
                <div className="container" id="con" >
                    <img src={data.image} alt="" />
                     <p className="title">{data.title}</p>
                     <p className="price">${data.price}</p>
                     <p className="category">{data.category}</p>
                     <p className="rating">{data.rating}</p>
                      <details >
                        <summary>Description</summary>
                        <dd>{data.description}</dd>
                      </details>
                    
                </div>
         
          
         
       
    </>)
}
export default PrductCard;

    