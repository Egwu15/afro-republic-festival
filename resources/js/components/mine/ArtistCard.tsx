import React from 'react'

type Props = {
    image:string;
    artistName:string;
    artistBio:string;
}

export default function ArtistCard({image, artistName, artistBio}: Props) {
  return (
    <div>
        <img className='w-full' src={image} alt={artistName} />
        <h4 className='mt-3.5 font-bold'>{artistName}</h4>
        <p className='text-sm my-3.5'>{artistBio}</p>
    </div>
  )
}