import React, {useEffect} from 'react'
import {useStoreState, useStoreActions} from 'easy-peasy';

export default function Posts() {

    // Using Easy-Peasy State Management
    const fetchPosts = useStoreActions(actions => actions.fetchPosts);
    const posts = useStoreState(state => state.posts);
    useEffect(()=>{
        fetchPosts();
    // eslint-disable-next-line
    },[])

    return (
        <div style={PostStyle}>
            {posts.map(post =>(
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <h6>{post.body}</h6>
                    =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
                </div>
            ))}
        </div>
    )
}

const PostStyle ={
    paddingLeft:'500px',
    paddingRight:'500px',
}