import React, {useState, useEffect, createContext} from 'react'
import Axios from 'axios'

export const ContextApi = createContext();

export const MovieProvider = props => {
    
const [movies, setMovies] = useState([]);

const options = {
    // url : 'https://fortnite-api.theapinetwork.com/store/get',
    url : 'https://swapi.co/api/films',
    method: 'GET',
    // headers:{
    //     'Authorization': 'authorization'
    // }
}
useEffect ( () => {
    Axios(options)
    .then(res => {
        const movies = res.data.results;
        setMovies(movies)
    })
// eslint-disable-next-line
},[]);


    return(
        <ContextApi.Provider value={[movies, setMovies]}>
            {props.children}
        </ContextApi.Provider>
    );
}
