import React from 'react'
import Post from './Post'

const Posts = ({posts, onLike, onBookmark, likedPosts, bmPosts}) => {

    const checkifLiked = (post) =>{
        const res = likedPosts.includes(post)
        return res
    }

    const checkifBookmarked = (post) => {
        const res = bmPosts.includes(post)
        return res
    }

    return (
        <div class = 'mx-auto flex flex-col space-y-4 max-w-md min-w-xs sm:max-w-xl md:max-w-2xl' >
            {posts.map((post, index) => (<Post key = {index} content = {post} onLike = {onLike} onBookmark = {onBookmark} initLike = {() => checkifLiked(post)} initBookmark={() => checkifBookmarked(post)}/>))}
        </div>
    )
}

export default Posts
