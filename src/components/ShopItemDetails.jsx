import React, {useState, useEffect} from 'react'
import Axios from 'axios';

export default function ShopItemDetails({match}) {

    const [item, setItem] = useState([]);


    const options = {
        url : `https://swapi.co/api/films/${match.params.id}`,
        method: 'GET',
    }
    useEffect ( () => {
        Axios(options)
        .then(res => {

            const item = res.data;
            console.log({"item" : item});
            setItem(item)
        })
    },[]);

    return (
        <div className="ShopDetail">
            <h1>{item.title}</h1>
            <h2>{item.director}</h2>
            <p>{item.opening_crawl}</p>
        </div>
    )
}
