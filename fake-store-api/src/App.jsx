import { computeHeadingLevel } from "@testing-library/react";
import PrductCard from "./ProductCard";

const App=()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>json.map((val,ind)=>{
                console.log(val.category);
                return <><p>{val.value}</p></>
            }))
    
}
export default App;