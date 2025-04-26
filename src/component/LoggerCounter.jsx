import React, { useState } from 'react'

export default function LoggerCounter() {
    const [Count, setCount] = useState(0);
    const handleCounter = () => {
        setCount(prev => prev + 1);
        console.log("Component đã được tạo!");
        console.log(` Giá trị mới: ${Count}`);
        
    }
    const handleIncrement = () =>{
        setCount(prev => prev - 1);
        console.log("Component đã được tạo!");
        console.log(` Giá trị mới: ${Count}`);
    }
  return (
    <div>
        <h1>Count: {Count} </h1>
        <button onClick={handleCounter}>Tăng</button>
        <button onClick={handleIncrement}>Giảm</button>
    </div>
  )
}
