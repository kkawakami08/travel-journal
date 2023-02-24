import React from 'react'
import marker from '../assets/map-marker-icon.png'

export default function Post() {
  return (
    <div className=' flex gap-5'>
        <img src="https://source.unsplash.com/WLxQvbMyfas" alt="Mount Fuji" className='w-1/3 object-cover rounded-lg'/>
        <div className='flex flex-col gap-2 my-5'>
            <div className='flex gap-4'>
                <div className='flex gap-2'>
                    <img src={marker} alt="map marker" className='h-4'/>
                    <h3 className='tracking-widest'>JAPAN</h3>
                </div>
                <a href="https://www.google.com/maps/d/u/0/viewer?mid=1W9AtcwnYAqP1yVHr5YjhwmQa0eM&hl=en&ll=35.36479441415821%2C138.763048&z=13" target="_blank" className='text-gray underline text-sm hover:text-purple'>View on Google Maps</a>
            </div>
            <h2 className='font-bold text-3xl'>Mount Fuji</h2>
            <div className='flex flex-col gap-2 py-3'>
                <p className='font-bold text-xs'>12 Jan, 2021 - 24 Jan, 2021</p>
                <p className='text-sm'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    </div>
  )
}
