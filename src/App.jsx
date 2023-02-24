import React from 'react'
import Header from './components/Header'
import Post from './components/Post'


export default function App() {
  return (
    <div className='flex flex-col items-center gap-10' >
      <Header />
      <div className='flex flex-col  gap-4 w-3/4'>
        <Post />
        <hr className='text-divider'/>
        <Post />
      </div>
    </div>
  )
}
