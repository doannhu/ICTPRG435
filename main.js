// Author name: Doan Nhu Do
// Date created: 20/06/2022
// Overview:
// The abstract art allows users drawing rectangulars, circles,
// lines and squares. The users can adjust the line width, and 
// change color in color set


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
        console.log(pass.value, passConf.value);
    } else {
        passConf.setCustomValidity('');
        passConf.reportValidity();        
    }
}

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
    if(recShadow.value) { // check if shadow is ticked
        ctx.beginPath();
        ctx.shadowColor = '#4B0082';
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
    //heading and introduction
    document.getElementById('heading1').innerHTML='<h1>Cuộc thi sáng tạo nghệ thuật</h1>';
    document.getElementById('intro').innerHTML='<h1>Giới thiệu</h1>';
    document.getElementById('guide1').innerText='Lựa chọn màu sắc';
    document.getElementById('guide2').innerText='Lựa chọn độ đậm nét';
    document.getElementById('guide3').innerText='Lựa chọn hình dạng';
    //form
    document.getElementById('reg_form').innerText='Form Đăng kí';
    document.getElementById('urs-label').innerText='tên đăng nhập: ';
    document.getElementById('email-label').innerText = 'thư điện tử: ';
    document.getElementById('pwd-label').innerText= 'mật khẩu: ';
    document.getElementById('pwdConf-label').innerText= 'xác nhận mật khẩu: ';
    document.getElementById('phone-label').innerText= 'số điện thoại: ';
    document.getElementById('label_file').innerText= 'File của bạn: ';
    document.getElementById('submitbtn').innerText= 'nộp';
    //line width
    document.getElementById('lineWidth-label').innerText='Độ dày nét';
    //drawing rectangular
    document.getElementById('rec').innerText='Hình chữ nhật ';
    document.getElementById('rec_posx').innerText='vị trí x: ';
    document.getElementById('rec_posy').innerText='vị trí y: ';
    document.getElementById('rec_wid').innerText='độ dài: ';
    document.getElementById('rec_hei').innerText='độ cao: ';
    document.getElementById('rec_sha').innerText='tạo bóng: ';
    document.getElementById('rec_btn').innerText='vẽ';
    //drawing square
    document.getElementById('sq').innerText='Hình vuông ';
    document.getElementById('sq_posx').innerText='vị trí x: ';
    document.getElementById('sq_posy').innerText='vị trí y: ';
    document.getElementById('sq_si').innerText='cạnh: ';
    document.getElementById('sq_btn').innerText='vẽ';
    //drawing circle
    document.getElementById('cir').innerText='Hình tròn ';
    document.getElementById('cir_posx').innerText='vị trí tâm x: ';
    document.getElementById('cir_posy').innerText='vị trí tâm y: ';
    document.getElementById('cir_radius').innerText='bán kính: ';
    document.getElementById('cir_btn').innerText='vẽ';    
    //drawing line
    document.getElementById('line').innerText='Đường thẳng ';
    document.getElementById('line_posx').innerText='vị trí x: ';
    document.getElementById('line_posy').innerText='vị trí y: ';
    document.getElementById('line_length').innerText='độ dài: ';
    document.getElementById('line_option').innerText='chọn hướng';  
    document.getElementById('line_opt0').innerText='90 độ hướng lên ';
    document.getElementById('line_opt1').innerText='90 độ hướng xuống ';
    document.getElementById('line_opt2').innerText='0 độ ngang ';
    document.getElementById('line_opt3').innerText='180 độ ngang ';
    document.getElementById('line_btn').innerText='vẽ';  

});

enBtn.addEventListener("click",()=>{
    //heading and introduction
    document.getElementById('heading1').innerHTML='<h1>Abstract Art Competition</h1>';
    document.getElementById('intro').innerHTML='<h1>Introduction</h1>';
    document.getElementById('guide1').innerText='Select color';
    document.getElementById('guide2').innerText='Select line width';
    document.getElementById('guide3').innerText='Select shape to draw';
    //form
    document.getElementById('reg_form').innerText='Registration form';
    document.getElementById('urs-label').innerText='username: ';
    document.getElementById('email-label').innerText = 'email: ';
    document.getElementById('pwd-label').innerText= 'password: ';
    document.getElementById('pwdConf-label').innerText= 'confirm password: ';
    document.getElementById('phone-label').innerText= 'phone: ';
    document.getElementById('label_file').innerText= 'Your file:';
    document.getElementById('submitbtn').innerText= 'submit';
    //line width
    document.getElementById('lineWidth-label').innerText='line width';
    //drawing rectangular
    document.getElementById('rec').innerText='Rectangular ';
    document.getElementById('rec_posx').innerText='position x: ';
    document.getElementById('rec_posy').innerText='position y: ';
    document.getElementById('rec_wid').innerText='width: ';
    document.getElementById('rec_hei').innerText='height: ';
    document.getElementById('rec_sha').innerText='shadow: ';
    document.getElementById('rec_btn').innerText='draw';
    //drawing square
    document.getElementById('sq').innerText='Square ';
    document.getElementById('sq_posx').innerText='position x: ';
    document.getElementById('sq_posy').innerText='position y: ';
    document.getElementById('sq_si').innerText='side';
    document.getElementById('sq_btn').innerText='draw';
    //drawing circle
    document.getElementById('cir').innerText='Circle ';
    document.getElementById('cir_posx').innerText='center position x: ';
    document.getElementById('cir_posy').innerText='center position y: ';
    document.getElementById('cir_radius').innerText='radius ';
    document.getElementById('cir_btn').innerText='draw';    
    //drawing line
    document.getElementById('line').innerText='Line';
    document.getElementById('line_posx').innerText='line starts x: ';
    document.getElementById('line_posy').innerText='line starts y: ';
    document.getElementById('line_length').innerText='length: ';
    document.getElementById('line_option').innerText='Choose a vertical/horizonal line:';  
    document.getElementById('line_opt0').innerText='vertical 90 degree';
    document.getElementById('line_opt1').innerText='vertical -90 degree';
    document.getElementById('line_opt2').innerText='horizonal 0 degree';
    document.getElementById('line_opt3').innerText='horizonal 180 degree';
    document.getElementById('line_btn').innerText='draw';  

});

//Clear button

document.querySelector('#clr_btn').addEventListener("click", ()=>{ctx.clearRect(0, 0, 400, 400)});
