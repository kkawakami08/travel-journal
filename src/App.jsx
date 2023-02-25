import React from 'react'
import Header from './components/Header'
import Post from './components/Post'
import blog from './blogData'


export default function App() {
  const posts = blog.map(blog => {
    return (
      <div>
        <Post 
          key={blog.id}
          title={blog.title}
          location={blog.location}
          googleMapsLink={blog.googleMapsLink}
          startDate={blog.startDate}
          endDate={blog.endDate}
          description={blog.description}
          imageURL={blog.imageURL}
        />
        <hr className='text-divider my-5'/>
      </div>
    )
  })
  return (
    <div className='flex flex-col items-center gap-10' >
      <Header />
      <div className='flex flex-col   w-3/4'>
        {posts}
      </div>
    </div>
  )
}
