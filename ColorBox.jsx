import React from 'react'


export default function ColorBox() {
  return (
    <div style={{display:'flex', justifyContent:'center', gap:'15px', color:'white', alignItems:'center'}} >
        <div className='color-box' style={{color:'while', backgroundColor: 'red', width: '200px', height: '200px'}}>Box</div>
        <div className='color-box' style={{color:'while', backgroundColor: 'green', width: '200px', height: '200px'}}>Box</div>
        <div className='color-box' style={{color:'while', backgroundColor: 'blue', width: '200px', height: '200px'}}>Box</div>
    </div>
  )
}
