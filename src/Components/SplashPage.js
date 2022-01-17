import React from 'react'
import {useEffect, useState} from 'react'

const SplashPage = () => {
    useEffect(() => {
    
        //Running particle.js Script 
        const script = document.createElement('script');
        script.src = "particles.js";
        script.async = true;
        document.body.appendChild(script);
      
        return () => {
          document.body.removeChild(script);
        }
    
      }, []);
    
    return (

        <div  class = "h-screen w-screen flex items-center bg-zinc-900">
            
            <div id = "particles-js" class = "h-screen w-screen absolute "></div>

            <div class = "mx-auto flex items-center border-black p-4 animate-pulse "> 
                
                <p id = "title" class = "p-4 tracking-tight text-8xl hidden text-white sm:inline ">
                    Spacestagram
                </p>

                <img src = "/images/tab3.png" class = "h-32 w-32 mt-3"></img>
                   
            </div>
         
        </div>
    )
}

export default SplashPage
