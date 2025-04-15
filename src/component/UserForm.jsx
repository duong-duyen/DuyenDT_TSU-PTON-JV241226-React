import React, { useState } from 'react'

export default function UserForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const handleInputChange = (e) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    const handleShowInfor = (e) => {
        e.preventDefault();
        const newUser = {
            name: name,
            email: email,
            age: age
        }
        console.log(newUser)
    }

  return (
    <div>
        <form action="">
        <h1>Thông tin người dùng</h1>
        <label htmlFor="">Họ và tên</label>
        <input onChange={handleInputChange} type="text" placeholder='Nhập họ tên' />
        <label htmlFor="">Email</label>
        <input onChange={handleEmailChange} type="email" placeholder='Nhập Email ' />
        <label htmlFor="">Tuổi</label>
        <input onChange={handleAgeChange} type="number" placeholder='Nhập tuổi' />
        <button onClick={handleShowInfor} type='Submit'>Gửi</button>
        </form>
    
    </div>
  )
}
