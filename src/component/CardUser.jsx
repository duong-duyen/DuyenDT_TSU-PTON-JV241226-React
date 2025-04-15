import React from 'react'

export default function CardUser({name, age, avatar}) {
    
  return (
    <div className='card-user'>
        <img src={avatar} alt="avatar" />
        <h2>{name}</h2>
        <p>Tuổi: {age}</p>
    </div>
  )
}
