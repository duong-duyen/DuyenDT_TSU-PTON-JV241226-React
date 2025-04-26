import React from 'react'
import { useState } from 'react'

export default function ColorBox() {
    const [color, setColor] = useState('red')
    const ramdomColor =  ['red', 'blue', 'green', 'orange', 'purple'];


    const ChangeColor = () => {
        const randomIndex = Math.floor(Math.random()*ramdomColor.length)
        setColor(ramdomColor[randomIndex]);
        
    }

  return (
    <div>
        <div style={{backgroundColor:color, width:'200px', height: '200px'}}></div>
        <button onClick={ChangeColor}>Đổi màu</button>
    </div>
  )
}
