import React from 'react'
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

export default function TableReactBootstrap() {
  return (
    <div>
        
        <Table striped bordered hover>
      <thead>
        <tr>
          <th>STT</th>
          <th>Họ và tên</th>
          <th>Giới tính</th>
          <th>Ngày sinh</th>
          <th>Email</th>
          <th>Địa chỉ</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Nam</td>
          <td>01/01/1990</td>
          <td>mark@gmail.com</td>
          <td>Hà Nội</td>
          <td className=' flex gap-2' colSpan={2}>
            <Button  variant='warning'>Sửa</Button>
            <Button variant='danger'>Xóa</Button>
          </td>
        </tr>
        
        <tr>
          <td>2</td>
          <td>Lan</td>
          <td>Nam</td>
          <td>15/03/1992</td>
          <td>lannguyen@gmail.com</td>
          <td>Hồ Chí Minh</td>
          <td className=' flex gap-2' colSpan="2">
            <Button variant='warning'>Sửa</Button>
            <Button variant='danger'>Xóa</Button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Hùng</td>
          <td>Nam</td>
          <td>10/07/1985</td>
          <td>hungtran@gmail.com</td>
          <td>Đà Nẵng</td>
          <td className=' flex gap-2' colSpan="2">
            <Button variant='warning'>Sửa</Button>
            <Button variant='danger'>Xóa</Button>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>Mai</td>
          <td>Nữ</td>
          <td>22/09/1995</td>
          <td>maiphan@gmail.com</td>
          <td>Cần Thơ</td>
          <td className=' flex gap-2'colSpan="2">
            <Button variant='warning'>Sửa</Button>
            <Button variant='danger'>Xóa</Button>
          </td>
        </tr>
        <tr>
          <td>5</td>
          <td>Long</td>
          <td>Nam</td>
          <td>05/12/1988</td>
          <td>longle@gmail.com</td>
          <td>Bình Dương</td>
          <td className=' flex gap-2' colSpan="2">
            <Button variant='warning'>Sửa</Button>
            <Button variant='danger'>Xóa</Button>
          </td>
        </tr>


      </tbody>
    </Table>

    </div>
  )
}
