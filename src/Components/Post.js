import React from 'react'
import {useState, useEffect} from 'react'

const Post = ({content, onLike, onBookmark, initBookmark, initLike}) => {

    const [liked,setLiked] = useState()
    const [bookmarked, setBookmarked] = useState()


    useEffect(() => {
        setLiked(initLike)
        setBookmarked(initBookmark)

    },[])


    // locally like post
    const like = () => {
        //like locally, change color/animate
        setLiked(!liked)
        //update global state
        onLike(content,liked)
    }

    // bookmark post
    const bookmark = () => {
        // bookmark locally, change color/animate
        setBookmarked(!bookmarked)

        //update the global state
        onBookmark(content,bookmarked)
    }

    return (
        <div class = "flex flex-col border border-gray-150 bg-white shadow-sm sm:shadow-xl pb-4 sm:rounded-xl dark:border-0   dark:bg-black">
            {/* title */}
            <h1 class = "px-4 py-4 text-md sm:text-lg font-bold sm:py-5 dark:text-white">{content.title}</h1>
            
            
            {/* image/video */}
            {content.media_type === "image" ? <img src = {content.url}></img>: <iframe class = "aspect-video" src={content.url}></iframe>}
            

            {/* interactive bar */}
            <div class = "flex justify-between px-3 py-3 sm:px-5 sm:py-4 dark:text-white">
                <div class = "flex space-x-3">
                    <button class = "self-center" onClick={like} >
                        <svg xmlns="http://www.w3.org/2000/svg" className={!liked ? "h-7 w-7 transition ease-in hover:text-rose-500" : "h-7 w-7 text-rose-500 stroke-rose-500 like"} fill={!liked ? "none" : "currentColor"} viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>

                    <a href = {`mailto:?&body=Hi, checkout this photo I found on Spacestagram ${content.url} `} class = "self-center">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition ease-in hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>

                    </a>  
                </div>

                <button class = "self-center" onClick={bookmark}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={!bookmarked ? "h-6 w-6" : "h-6 w-6 like"} fill={!bookmarked ? "none" : "currentColor"} viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                </button>
            </div>

            {/* Description */}
            <p class = "px-4 sm:px-6 text-sm leading-tight sm:text-base dark:text-white">
                {content.explanation}
            </p>

            {/* Date */}
            <p class = "px-4 sm:px-6 py-2 text-xs sm:text-sm text-gray-400"> 
                {content.date}
            </p>
        </div>
    )
}


export default Post
