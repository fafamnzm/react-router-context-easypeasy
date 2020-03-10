import React, {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom';
import {ContextApi} from '../StateManagement/ContextApi';
import Add from './Add';
// import {useStoreState, useStoreActions, useStore} from 'easy-peasy';

export default function Movies() {
    // when using context API
    const [movies, setMovies] = useContext(ContextApi)

    // Using Easy-Peasy State Management
    // const fetchMovies = useStoreActions(actions => actions.fetchMovies);
    // const movies = useStoreState(state => state.movies);
    // useEffect(()=>{
    //     fetchMovies();
    // // eslint-disable-next-line
    // },[])
    return (
        <div style={MoviesClass}>
            <Add />
            {movies.map(movie => (
                <div key={movie.episode_id} >
                    <Link to={`/movie/${movie.episode_id}`}>
                        <h3>{movie.title}</h3>
                        <h6>{movie.director}</h6>
                    </Link>
                    =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                    </div>
            ))}
        </div>
    )
}

const MoviesClass={
    paddingLeft:'600px',
    paddingRight:'600px',
}