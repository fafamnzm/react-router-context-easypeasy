import React, {useState, useContext} from 'react'
import {ContextApi} from '../StateManagement/ContextApi';
import {v4 as uuid} from 'uuid';

export default function Add() {
    const [name, setName] = useState('');
    const [director, setDirector] = useState('');
    const [movies, setMovies] = useContext(ContextApi)

    const Add = e => {
        e.preventDefault();
        if(name === '' || director === '') return(console.log('empty inputs are invalid'))
        // setMovies(prev => [...prev, {title: name, director}])
        setMovies(prev => [...prev, {title: name, director, episode_id: uuid.v4() }])
        setName('')
        setDirector('')
    }
    return (
        <form onSubmit={Add}>
            <input className="input-field" type="text" placeholder="Enter the name of the movie" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input className="input-field" type="text" placeholder="Enter the name of the director" name="director" value={director} onChange={(e)=>setDirector(e.target.value)}/>
            <button className="btn-add">+</button>
        </form>
    )
}
