import React, { useState } from 'react'

export default function CounText() {
    const [CounText, setCountText] = useState(0);
    const handleCountText = (e) => {
        setCountText(e.target.value.length);
    }


  return (
    <div>
        <textarea onChange={handleCountText} name="" id=""></textarea>
        <p>Số ký tự: {CounText} </p>
    </div>
  )
}
