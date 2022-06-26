const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Registration - password confirmation
const passConf = document.getElementById("pwdConf");
const pass = document.getElementById("pwd");
passConf.addEventListener("change", validatePassword);
function validatePassword(){
    if(pass.value != passConf.value){
        passConf.setCustomValidity("password don't match");
        passConf.reportValidity();
        pass.value ='';
        passConf.value='';
    } else {
        passConf.setCustomValidity('');
        passConf.reportValidity();        
    }
}
// const email = document.getElementById("email");
// email.addEventListener("change",validateEmail);
// function validateEmail(){
//     if 
// }

// Select line width
ctx.lineWidth = document.getElementById("line_width").value; 

// Select color
let clr = '#4e73df';
document.getElementById("clr_p").addEventListener("click", () =>{ clr = '#4e73df' });
document.getElementById("clr_d").addEventListener("click", () =>{ clr = '#e74a3b' });
document.getElementById("clr_w").addEventListener("click", () =>{ clr = '#f6c23e' });
document.getElementById("clr_se").addEventListener("click", () =>{ clr = '#858796' });
document.getElementById("clr_su").addEventListener("click", () =>{ clr = '#1cc88a' });

// Draw rectangular
document.querySelector('#rec_btn').addEventListener("click", drawRectangular);
function drawRectangular(){
    const recX = document.querySelector('#rec_x');
    const recY = document.querySelector('#rec_y');
    const recWidth = document.querySelector('#rec_width');
    const recHeight = document.querySelector('#rec_height');
    const recShadow = document.querySelector('#rec_shadow');
    if(recShadow) {
        ctx.beginPath();
        ctx.shadowColor = 'red';
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = 10;

        ctx.fillStyle = clr;
        ctx.fillRect(recX.value, recY.value, recWidth.value, recHeight.value);
        ctx.strokeStyle = clr;
        ctx.strokeRect(recX.value, recY.value, recWidth.value, recHeight.value);
    } else {
        ctx.beginPath();
        ctx.fillStyle = clr;
        ctx.fillRect(recX.value, recY.value, recWidth.value, recHeight.value);
        ctx.strokeStyle = clr;
        ctx.strokeRect(recX.value, recY.value, recWidth.value, recHeight.value);
     }
}


// Draw square
document.querySelector('#sq_btn').addEventListener("click",drawSquare);
function drawSquare(){
    const sqX = document.querySelector('#sq_x');
    const sqY = document.querySelector('#sq_y');
    const sqSide = document.querySelector('#sq_side');
    ctx.beginPath();
    ctx.fillStyle = clr;
    ctx.fillRect(sqX.value, sqY.value, sqSide.value, sqSide.value);
    ctx.strokeStyle = clr;
    ctx.strokeRect(sqX.value, sqY.value, sqSide.value, sqSide.value); 
}


// Draw circle
document.querySelector('#cir_btn').addEventListener("click", drawCircle);
function drawCircle(){
    const cirX = document.querySelector('#cir_cen_x');
    const cirY = document.querySelector('#cir_cen_y');
    const cirRad = document.querySelector('#cir_rad');
    ctx.beginPath();
    ctx.arc(cirX.value, cirY.value, cirRad.value, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = clr;
    ctx.fill();
}


// Draw line
document.querySelector('#line_btn').addEventListener("click", drawLine);
function drawLine(){
    const lineX = document.querySelector('#line_start_x');
    const lineY = document.querySelector('#line_start_y');
    const lineLen = document.querySelector('#line_len');
    const lineOpt = document.querySelector('#line_opt');
    ctx.beginPath();
    switch (lineOpt.value) {
        case "0":
            ctx.moveTo(lineX.value, lineY.value);
            ctx.lineTo(lineX.value, lineY.value +  lineLen.value);
            ctx.stroke();
            break;
        case "1":
            ctx.moveTo(lineX.value, lineY.value);
            ctx.lineTo(lineX.value, lineY.value -  lineLen.value);
            ctx.stroke();
            break;
        case "2":
            ctx.moveTo(lineX.value, lineY.value);
            ctx.lineTo(lineX.value  + lineLen.value, lineY.value);
            ctx.stroke();
            break;
        case "3":
            ctx.moveTo(lineX.value, lineY.value);
            ctx.lineTo(lineX.value -  lineLen.value, lineY.value);
            x.stroke();
            break;}}

    


// Select language
const vieBtn = document.querySelector('#vn_btn');
const enBtn = document.querySelector('#en_btn');

vieBtn.addEventListener("click",()=>{
    document.getElementById('heading1').innerHTML='<h1>Cuộc thi sáng tạo nghệ thuật</h1>';
    document.getElementById('intro').innerHTML='<h1>Giới thiệu</h1>';
    document.getElementById('guide1').innerText='1. Lựa chọn màu sắc';
    document.getElementById('guide2').innerText='2. Lựa chọn độ đậm nét';
    document.getElementById('guide3').innerText='1. Lựa chọn hình dạng';
    //
    document.getElementById('reg_form').innerText='Form Đăng kí';
    document.getElementsByName('username').innerHTML='<input type="text" name="username" placeholder="nhập tên người dùng tại đây" required>nhập tên người dùng tại đây</input>';
    document.getElementById('email').innerHTML = '<input id="email" type="email" name="email" placeholder="nhập email tại đây" required>';
    document.getElementById('pwd').innerHTML= '<input id="pwd" type="password" name="password" placeholder="nhập mật khẩu tại đây" required>';
    document.getElementById('pwdConf').innerHTML= '<input id="pwdConf" type="password" name="passwordConf" placeholder="xác nhận mật khẩu tại đây" required>'
    document.getElementById('phone').innerHTML= '<input type="number" placeholder="nhập số đt vào đây">';
    document.getElementById('email-subject').innerHTML= '<input type="hidden" name="_subject" id="email-subject" value="File Upload Form">';
    document.getElementById('label_file').innerHTML= '<label id="label_file" for="upload">File của bạn:</label>'
    document.getElementById('fileUpload').innerHTML= '<input id="fileUpload" type="file" name="upload">';
    document.getElementById('submitbtn').innerHTML= '<button id="submitbtn" type="submit">nộp</button>';
});


//Clear button
//Check mouse position and display in canvas. For test only!
canvas.addEventListener("mousemove", (event) => {
    console.log("Mouse X: " + event.clientX)
    console.log("Mouse Y: " + event.clientY)
});
document.querySelector('#clr_btn').addEventListener("click", ()=>{ctx.clearRect(309, 227, 400, 400)});