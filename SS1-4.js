// Viết 1 hàm hiển thị nội dung trên nhiều dòng 
// Hàm này sẽ nhận 2 đối số  
// name : Tên người gửi thư 
// companyName: Tên công ty
// Sử dụng String Interpolation và Template Literals 
// Kết quả trả về như dưới

const sendMail = (name, companyName) =>{
    console.log(`Dear ${name}, 
    Thank you for purchasing our product. We hope you enjoy it. 
    Best regards, 
    ${companyName}`);
}

sendMail("Alice","Omron Company");


