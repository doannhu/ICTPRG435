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
    if (recX.value<=0 || recY.value<=0 || recWidth.value<=0 || recHeight.value<=0 ||recX.value>400 || recY.value>400 || recWidth.value>400 || recHeight.value>400){
        alert('Please enter value between 0 and 400');
    } else if(recShadow.checked) { // check if shadow is ticked
        ctx.beginPath();
        ctx.shadowColor = '#26023f';
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = 10;

        ctx.fillStyle = clr;
        ctx.fillRect(recX.value, recY.value, recWidth.value, recHeight.value);
        ctx.strokeStyle = clr;
        ctx.strokeRect(recX.value, recY.value, recWidth.value, recHeight.value);
        recShadow.checked = false;
        ctx.shadowColor = '#fff'; //clear the shadow for the next draw
    } else {
        ctx.beginPath();
        ctx.fillStyle = clr;
        ctx.fillRect(recX.value, recY.value, recWidth.value, recHeight.value);
        ctx.strokeStyle = clr;
        ctx.strokeRect(recX.value, recY.value, recWidth.value, recHeight.value);

     }
    recX.value=''; //clear input
    recY.value='';
    recWidth.value='';
    recHeight.value='';
}


// Draw square
document.querySelector('#sq_btn').addEventListener("click",drawSquare);
function drawSquare(){
    const sqX = document.querySelector('#sq_x');
    const sqY = document.querySelector('#sq_y');
    const sqSide = document.querySelector('#sq_side');
    if (sqX.value <= 0 || sqX.value >400 || sqY.value <= 0 || sqY.value >400) {
        alert("please enter value between 0 and 400");
    } else {                                      
        ctx.beginPath();
        ctx.fillStyle = clr;
        ctx.fillRect(sqX.value, sqY.value, sqSide.value, sqSide.value);
        ctx.strokeStyle = clr;
        ctx.strokeRect(sqX.value, sqY.value, sqSide.value, sqSide.value);
    }
    sqX.value = ''; //clear input
    sqY.value = ''; 
}


// Draw circle
document.querySelector('#cir_btn').addEventListener("click", drawCircle);
function drawCircle(){
    const cirX = document.querySelector('#cir_cen_x');
    const cirY = document.querySelector('#cir_cen_y');
    const cirRad = document.querySelector('#cir_rad');
    if (cirX.vale <=0 || cirY.value <=0 || cirX.vale >400 || cirY.value >400) {
        alert ('Please enter value between 0 and 400');
    } else {
        ctx.beginPath();
        ctx.arc(cirX.value, cirY.value, cirRad.value, 0, 2*Math.PI);
        ctx.stroke();
        ctx.fillStyle = clr;
        ctx.fill();
    }
    cirX.value=''; //clear input
    cirY.value='';
}


// Draw line
document.querySelector('#line_btn').addEventListener("click", drawLine);
function drawLine(){
    const lineX = document.querySelector('#line_start_x');
    const lineY = document.querySelector('#line_start_y');
    const lineLen = document.querySelector('#line_len');
    const lineOpt = document.querySelector('#line_opt');
    if (lineX.value <=0 || lineY.value <=0 || lineLen.value <=0 || lineX.value >400 || lineY.value >400 || lineLen.value >400){
        alert('Please enter value between 0 and 400');
    } else {
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
                break;
        };
    }
    lineX.value=''; //clear input
    lineY.value='';
    lineLen.value='';
}

    


// Select language
const vieBtn = document.querySelector('#vn_btn');
const enBtn = document.querySelector('#en_btn');

vieBtn.addEventListener("click",()=>{
    //heading and introduction
    document.getElementById('heading1').innerText='Cu???c thi s??ng t???o ngh??? thu???t';
    document.getElementById('intro').innerText='Gi???i thi???u';
    document.getElementById('guide1').innetText='????ng k?? tr?????c khi b???t ?????u';
    document.getElementById('guide2').innerText='L???a ch???n m??u s???c';
    document.getElementById('guide3').innerText='L???a ch???n ????? ?????m n??t';
    document.getElementById('guide4').innerText='L???a ch???n h??nh d???ng';
    document.getElementById('guide5').innerText='???n x??a ????? b???t ?????u l???i h??nh v???';
    //clear button
    document.getElementById('clr_btn').innerText='X??a';    
    //form
    document.getElementById('reg_form').innerText='Form ????ng k??';
    document.getElementById('urs-label').innerText='T??n ????ng nh???p: ';
    document.getElementById('email-label').innerText = 'Th?? ??i???n t???: ';
    document.getElementById('pwd-label').innerText= 'M???t kh???u: ';
    document.getElementById('pwdConf-label').innerText= 'X??c nh???n m???t kh???u: ';
    document.getElementById('phone-label').innerText= 'S??? ??i???n tho???i: ';
    document.getElementById('label_file').innerText= 'File c???a b???n: ';
    document.getElementById('submitbtn').innerText= 'N???p';
    //line width
    document.getElementById('lineWidth-label').innerText='????? d??y n??t';
    //drawing rectangular
    document.getElementById('rec').innerText='H??nh ch??? nh???t ';
    document.getElementById('rec_posx').innerText='v??? tr?? x: ';
    document.getElementById('rec_posy').innerText='v??? tr?? y: ';
    document.getElementById('rec_wid').innerText='????? d??i: ';
    document.getElementById('rec_hei').innerText='????? cao: ';
    document.getElementById('rec_sha').innerText='t???o b??ng: ';
    document.getElementById('rec_btn').innerText='v???';
    //drawing square
    document.getElementById('sq').innerText='H??nh vu??ng ';
    document.getElementById('sq_posx').innerText='v??? tr?? x: ';
    document.getElementById('sq_posy').innerText='v??? tr?? y: ';
    document.getElementById('sq_si').innerText='c???nh: ';
    document.getElementById('sq_btn').innerText='v???';
    //drawing circle
    document.getElementById('cir').innerText='H??nh tr??n ';
    document.getElementById('cir_posx').innerText='v??? tr?? t??m x: ';
    document.getElementById('cir_posy').innerText='v??? tr?? t??m y: ';
    document.getElementById('cir_radius').innerText='b??n k??nh: ';
    document.getElementById('cir_btn').innerText='v???';    
    //drawing line
    document.getElementById('line').innerText='???????ng th???ng ';
    document.getElementById('line_posx').innerText='v??? tr?? x: ';
    document.getElementById('line_posy').innerText='v??? tr?? y: ';
    document.getElementById('line_length').innerText='????? d??i: ';
    document.getElementById('line_option').innerText='ch???n h?????ng';  
    document.getElementById('line_opt0').innerText='90 ????? h?????ng l??n ';
    document.getElementById('line_opt1').innerText='90 ????? h?????ng xu???ng ';
    document.getElementById('line_opt2').innerText='0 ????? ngang ';
    document.getElementById('line_opt3').innerText='180 ????? ngang ';
    document.getElementById('line_btn').innerText='v???';  

});

enBtn.addEventListener("click",()=>{
    //heading and introduction
    document.getElementById('heading1').innerText='Abstract Art Competition';
    document.getElementById('intro').innerHTML='Introduction';
    document.getElementById('guide1').innerText='Sign up before start';    
    document.getElementById('guide2').innerText='Select color';
    document.getElementById('guide3').innerText='Select line width';
    document.getElementById('guide4').innerText='Select shape to draw';
    document.getElementById('guide5').innerText='Press clear to start over the Canvas';
    //clear button
    document.getElementById('clr_btn').innerText='Clear Canvas';       
    //form
    document.getElementById('reg_form').innerText='Sign Up';
    document.getElementById('urs-label').innerText='Username: ';
    document.getElementById('email-label').innerText = 'Email: ';
    document.getElementById('pwd-label').innerText= 'Password: ';
    document.getElementById('pwdConf-label').innerText= 'Confirm password: ';
    document.getElementById('phone-label').innerText= 'Phone: ';
    document.getElementById('label_file').innerText= 'Your file:';
    document.getElementById('submitbtn').innerText= 'Submit';
    //line width
    document.getElementById('lineWidth-label').innerText='Line width';
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

//Clear canvas
document.querySelector('#clr_btn').addEventListener("click", ()=>{ctx.clearRect(0, 0, 400, 400)}); 
