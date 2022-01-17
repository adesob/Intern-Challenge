import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const NavBar = ({darkMode}) => {
    const [menutoggled, setMenuToggled] = useState(false)
    const [dmtoggled, setDmToggled] = useState(darkMode)

    
    const toggleNav = () => {
        setMenuToggled(!menutoggled)
    }

    const toggleDM = () => {
        setDmToggled(!dmtoggled)
        console.log(dmtoggled)
        darkMode()
    }

 
    return (
      <nav class = "bg-white shadow-md sticky top-0 z-10 dark:bg-black">
        {/* Nav bar items */}
        <div class = "flex m-auto justify-between px-2 sm:max-w-4xl sm:px-7 py-3 dark:text-white">

            {/* title */}
            <Link to = '/' class = "flex items-center space-x-2"> 
    
                <p id = "title" class = " tracking-tight text-3xl dark:text-stone-50 ">
                    Spacestagram
                </p>
                <img src = {!dmtoggled ? "/images/tab.png" : '/images/tab3.png'} class = "h-9 w-9 "></img>

            </Link>

            

            {/* Mobile Nav*/}
            <div class = "flex flex-row sm:hidden space-x-4"> 
                {/* Dark Button */}

                {!dmtoggled && <button class = "self center " onClick={toggleDM}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                        </svg>
                                    </button>}

                {/* Light Button */}

                {dmtoggled && <button class = "self center" onClick={toggleDM}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                    </svg>
                                </button>}

                {/* Hamburger Button */}
                <button class = "self center" onClick={toggleNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d={!menutoggled ? "M4 6h16M4 12h16M4 18h16" : "M6 18L18 6M6 6l12 12"}  />
                    </svg>
                </button>
            </div>
            

        
          <ul class = "hidden space-x-3 items-center sm:flex sm:space-x-7">

            {/* Home Button */}
            <li class = "flex">
                <Link to = '/' class = "self center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition ease-in hover:text-gray-400  dark:hover:text-gray-400 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.55} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    
                </Link>
            </li>
            
            {/* Likes Button */}
            <li class = "flex">
               <Link to = '/Likes' class = "self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 transition ease-in dark:text-white hover:text-gray-400  dark:hover:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </Link> 
            </li>

            {/* Bookmarks Button */}
            <li class = "flex">
                <Link to = '/Bookmarks' class = "self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 transition ease-in hover:text-gray-400  dark:hover:text-gray-400 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                </Link>
            </li>

            <li>
                {/* Dark Button */}

                {!dmtoggled && <div class = "self-center" onClick={toggleDM}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer transition ease-in hover:text-gray-400  dark:hover:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                        </svg>
                                    </div>}

                {/* Light Button */}

                {dmtoggled && <div class = "self-center" onClick={toggleDM}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 cursor-pointer transition ease-in hover:text-gray-400  dark:hover:text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                    </svg>
                                </div>}
            </li>

          </ul>
        </div>

        {/* Hamburger menu, appears if toggled*/}
        {menutoggled && 
                    <div class = 'dropdown px-4 pb-2 -translate-y-1.5 sm:hidden'>
                        <ul class = "flex flex-col text-lg font-bold dark:text-white">
                            <li class = "self-end">
                                <Link to = '/Likes'>Likes</Link>
                            </li>
                            <li class = "self-end">
                            <Link to = '/Bookmarks'>Bookmarks</Link>
                            </li>
                        </ul>  
                    </div>}
      </nav>
    )
}

export default NavBar
