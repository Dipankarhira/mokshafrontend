import React from 'react'
import About from './About'
import Comment from "./Comment"
import Description from './Description'
import EventCard from './EventCard'
import Findus from './Findus'
function Home() {
  return (
    <>
    <div className='bg-light'>
    <Description/>
    <EventCard/>
    <About/>
    <Comment/>
    <Findus/>

    </div>
   
    </>
  )
}

export default Home