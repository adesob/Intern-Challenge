import React from 'react'

const SeeMore = ({onFetch}) => {
    return (
        <button onClick = {onFetch} class = " flex justify-center mx-auto space-x-2  transition ease-in hover:text-sky-400 dark:hover:text-sky-400 dark:text-white">
                    <p>See More</p>
                
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mt-1 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                    </svg>

        </button> 
    )
}

export default SeeMore
