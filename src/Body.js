import React from 'react';
import {useState, useEffect} from 'react';
import index from './index.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Body() {

    const[items,setItems] = useState([]);

    useEffect( () => {
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then( (response) => response.json())
        .then(data => {
            setItems(data.meals); // Here we are updating the items with the response data from fetch api 
            //console.log(items);
        })

    },[]);

    const foodItem = items.map((item) =>{
        return (
            <div className="col-md-4">
                <img src={item.strMealThumb} />
                <p>{item.strMeal}</p>
                <p>{item.idMeal}</p>
            </div>
        )
            
    });

    return (
        <div className="row mt-5">            
            {foodItem}
        </div>
    );
}

export default Body;