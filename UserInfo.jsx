import React from 'react'

export default function UserInfo() {
    const userInfor = {
        name: "Nguyễn Văn A",
        sex: "Nam",
        birthday: "06/03/2024",
        email: "nva@gmail.com",
        address: "Thanh Xuân, Hà Nội",
    }
  return (
    <div>
        <h1>Thông tin cá nhân</h1>
        <ul>
            <li>Họ và tên: {userInfor.name}</li>
            <li>Giới tính: {userInfor.sex}</li>
            <li>Ngày sinh: {userInfor.birthday}</li>
            <li>Email: {userInfor.email}</li>
            <li>Địa chỉ: {userInfor.address}</li>
        </ul>
        

    </div>
  )
}
