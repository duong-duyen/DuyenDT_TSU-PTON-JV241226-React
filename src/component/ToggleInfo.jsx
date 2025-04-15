import React, { useState } from 'react'

export default function ToggleInfo() {
    const [isVisible, setIsVisible] = useState(false);

    const handleVisible = () => {
        setIsVisible(!isVisible);
    }
  return (
    <div>
        <h2>Ẩn/ Hiện thông tin</h2>
        <button onClick={handleVisible}> {isVisible === true ? 'Ẩn' : 'Hiện'} thông tin</button>
        <p>{isVisible === true ? 'Xin chào' :''}</p>
    </div>
  )
}
