import React, {useContext} from 'react';
import {useStoreState} from 'easy-peasy';
import logo from '../logo.svg';
import {Link} from 'react-router-dom';
import {ContextApi} from '../StateManagement/ContextApi';


export default function Nav() {
    const [movies, setMovies] = useContext(ContextApi)
    const posts = useStoreState(state => state.posts)
    return (
        <div>
            <nav className="nav">
                <img src={logo} className="App-logo" alt="logo" />
                <ul className="nav-links">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/movie">
                        <li>Movies: {movies.length}</li>
                    </Link>
                    <Link to="/post">
                        <li>Posts: {posts.length}</li>
                    </Link>
                    <Link to="/about">
                        <li>About Us</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}
