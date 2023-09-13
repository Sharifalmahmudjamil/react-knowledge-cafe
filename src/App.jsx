
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
  
   const [bookmarks,setBookmarks]=useState([]);


   const [readingTime,setReadingTime]=useState(0);

  //  use event handler  bookmark
   const handleAddToBookmark= blog =>{
    const newBookmarks =[...bookmarks,blog]
    setBookmarks(newBookmarks);
   }
// use event handler to read time
 const handleMarkAsRead= (id,time) =>{
   setReadingTime(readingTime+time);

   //  remove the read blog from the book marks

  //  console.log('remove book mark ',id)
  const remainingBookMarks= bookmarks.filter(bookmark => bookmark.id !== id);
  setBookmarks(remainingBookMarks);
 }


  

  return (
    <>
      
      <Header></Header>

      <div className='md:flex max-w-7xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
