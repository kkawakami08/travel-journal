import React from 'react'
import marker from '../assets/map-marker-icon.png'

export default function Post(props) {
  return (
    <div className=' flex gap-5'>
        <img src={props.imageURL} alt={props.location} className='w-1/3 object-cover rounded-lg'/>
        <div className='flex flex-col gap-2 my-5'>
            <div className='flex gap-4 items-center'>
                <div className='flex gap-2 items-center'>
                    <img src={marker} alt="map marker" className='h-4'/>
                    <h3 className='tracking-widest'>{props.location.toUpperCase()}</h3>
                </div>
                <a href={props.googleMapsLink} target="_blank" className='text-gray underline text-sm hover:text-purple'>View on Google Maps</a>
            </div>
            <h2 className='font-bold text-3xl'>{props.title}</h2>
            <div className='flex flex-col gap-2 py-3'>
                <p className='font-bold text-xs'>{props.startDate} - {props.endDate}</p>
                <p className='text-sm'>{props.description}</p>
            </div>
        </div>
    </div>
  )
}
