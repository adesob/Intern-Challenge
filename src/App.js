import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import SplashPage from './Components/SplashPage'
import NavBar from './Components/NavBar'
import Posts from './Components/Posts'
import Footer from './Components/Footer'
import SeeMore from './Components/SeeMore'

function App() {

  const [darkMode, setDarkMode] = useState(false)

  const [posts, setPosts] = useState([])
  const [likedPosts, setLikedPosts] = useState([])
  const [bookmarkedPosts, setBookmarkedPosts] = useState([])
  const [show, setShow] = useState(true)


  useEffect(() => {

      const getPosts = async() => {
        const posts = await fetchPosts()
        setPosts(posts)
      }

      getPosts()

      const timeId = setTimeout(() => {
        // Time for Splash page component
        setShow(false)
      }, 2500)

      return () => {
        clearTimeout(timeId)
      } 
  
  }, []);
  
  // fetch Posts from API 
  const fetchPosts = async () => {
    const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=cR2jDhFDkTeXmrtcgzAMQIy16naF7FvsaRq7fx0k&count=20", {
      "method": "GET",
    });
   
    const data = await res.json();
    console.log(posts)

    return data
  }

  // fetch more posts from API
  const fetchMorePosts = async () => {
    const res = await fetch("https://api.nasa.gov/planetary/apod?api_key=cR2jDhFDkTeXmrtcgzAMQIy16naF7FvsaRq7fx0k&count=10", {
      "method": "GET",
    });
    
    const data = await res.json();
    
    // shallow copy of posts
    const tmpposts = [...posts]

    //update posts state with the newposts  
    data.map((post) => { 
                    tmpposts.push(post)
                  })
    setPosts(tmpposts)
  }

  // like or unlike a post and save state
  const likePost = (post, state) => {
      
    // depending on the state add to likedposts or remove from likedposts
      !state ? setLikedPosts([...likedPosts,post]) : setLikedPosts(likedPosts.filter((likedpost) => post.title != likedpost.title))
      
      console.log(likedPosts)
  }


  // bookmark a post and save state
  const bookmarkPost = (post, state) => {
    
    !state ? setBookmarkedPosts([...bookmarkedPosts,post]) : setBookmarkedPosts(bookmarkedPosts.filter((bookmarkedpost) => post.title != bookmarkedpost.title))
    console.log(bookmarkedPosts)
  }

  const changeDarkMode = () => {
    setDarkMode(!darkMode)
    console.log(darkMode)
  }



  return (
    <Router>
      <div className={!darkMode ? "App space-y-4 dark bg-black z-0 dm min-h-screen" : "App space-y-4 min-h-screen md"}>
        
        {show && <SplashPage/>}
        {!show && <NavBar darkMode = {changeDarkMode}/>}
        

        <Routes>
          {/* index route*/}
          <Route path = '/' element = {
            <>
              
              {!show && 
                <>
                  <Posts posts = {posts} likedPosts = {likedPosts} bmPosts = {bookmarkedPosts} onLike = {likePost} onBookmark = {bookmarkPost}/>
                  <SeeMore onFetch = {fetchMorePosts}/>
                  
                </>
              }    
            </>
            }
          />

          {/* liked posts route */}
          <Route path = '/Likes' element = {<><Posts posts = {likedPosts} likedPosts = {likedPosts} bmPosts = {bookmarkedPosts} onLike = {likePost} onBookmark = {bookmarkPost}/></> }/>
          
          {/* bookmarked posts route*/}
          <Route path = '/Bookmarks' element = {<><Posts posts = {bookmarkedPosts} likedPosts = {likedPosts} bmPosts = {bookmarkedPosts} onLike = {likePost} onBookmark = {bookmarkPost}/></> }/>
        </Routes>

        {!show && <Footer/>}
        
      </div>
    </Router>
  );
}

export default App;
