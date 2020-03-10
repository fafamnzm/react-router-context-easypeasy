import {action, thunk} from 'easy-peasy';
import Axios from 'axios';

const options={
    // url : 'https://swapi.co/api/films',
    url : 'https://jsonplaceholder.typicode.com/posts?_limit=7',
    method: 'GET',
}
export default {
    /// States
    posts: [],
    
    // Thunk    
    fetchPosts: thunk( actions=>
        Axios(options)
        .then(res=>{
            const posts = res.data;
            actions.setPosts(posts);
            console.log('from easy-peasy')
            console.log(posts)
        })
        ),
    // Actions
    setPosts: action((state, posts) => {
        state.posts = posts;
    }),
};

