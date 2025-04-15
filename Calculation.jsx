import React from 'react'

export default function Calculation() {
        const a = 10;
        const b = 10;
        const add = (a, b) => a + b;
        const sub = (a, b) => a - b;    
        const mul = (a, b) => a * b;
        const div = (a, b) => a / b;

  return (
    <div>
        <h1>Danh sách kết quả</h1>
        <ul>
            <li>{a} + {b} = {add(a, b)}</li>
            <li>{a} - ${b} = {sub(a, b)}</li>
            <li>{a} * ${b} = {mul(a, b)}</li>
            <li>{a} / ${b} = {div(a, b)}</li>
        </ul>
    </div>
    )
    
} 