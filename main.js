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

// Check mouse position and display in canvas. For test only!
// canvas.addEventListener("mousemove", (event) => {
//     console.log("Mouse X: " + event.clientX)
//     console.log("Mouse Y: " + event.clientY)
// });

// Select line width
const lineWid = document.getElementById("line_width");
ctx.lineWidth = lineWid.value; 

// Select color
const clrP = document.getElementById("clr_p");
const clrD = document.getElementById("clr_d");
const clrW = document.getElementById("clr_w");
const clrSe = document.getElementById("clr_se");
const clrSu = document.getElementById("clr_su");
let clr = '#4e73df';
clrP.addEventListener("click", () =>{ clr = '#4e73df' });
clrD.addEventListener("click", () =>{ clr = '#e74a3b' });
clrW.addEventListener("click", () =>{ clr = '#f6c23e' });
clrSe.addEventListener("click", () =>{ clr = '#858796' });
clrSu.addEventListener("click", () =>{ clr = '#1cc88a' });

// Draw rectangular
const recX = document.querySelector('#rec_x');
const recY = document.querySelector('#rec_y');
const recWidth = document.querySelector('#rec_width');
const recHeight = document.querySelector('#rec_height');
const recShadow = document.querySelector('#rec_shadow');
document.querySelector('#rec_btn').addEventListener("click",() => {
    if(recShadow) {
        ctx.shadowColor = 'red';
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = 10;

        ctx.fillStyle = clr;
        ctx.fillRect(recX.value, recY.value, recWidth.value, recHeight.value);
        ctx.strokeStyle = clr;
        ctx.strokeRect(recX.value, recY.value, recWidth.value, recHeight.value);
    } else {
        ctx.fillStyle = clr;
        ctx.fillRect(recX.value, recY.value, recWidth.value, recHeight.value);
        ctx.strokeStyle = clr;
        ctx.strokeRect(recX.value, recY.value, recWidth.value, recHeight.value);
     }
});

// Draw square
const sqX = document.querySelector('#sq_x');
const sqY = document.querySelector('#sq_y');
const sqSide = document.querySelector('#sq_side');
document.querySelector('#sq_btn').addEventListener("click",() => {
    ctx.fillStyle = clr;
    ctx.fillRect(sqX.value, sqY.value, sqSide.value, sqSide.value);
    ctx.strokeStyle = clr;
    ctx.strokeRect(sqX.value, sqY.value, sqSide.value, sqSide.value);
});

// Draw circle
const cirX = document.querySelector('#cir_cen_x');
const cirY = document.querySelector('#cir_cen_y');
const cirRad = document.querySelector('#cir_rad');
document.querySelector('#cir_btn').addEventListener("click",() => {
    ctx.beginPath();
    ctx.arc(cirX.value, cirY.value, cirRad.value, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = clr;
    ctx.fill();
});

// Draw line
const lineX = document.querySelector('#line_start_x');
const lineY = document.querySelector('#line_start_y');
const lineLen = document.querySelector('#line_len');
const lineOpt = document.querySelector('#line_opt');
const lineBtn = document.querySelector('#line_btn');
lineBtn.addEventListener("click", () => {
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
            break;}
    
});

// Select language
const spanBtn = document.querySelector('#spanish_btn');
const enBtn = document.querySelector('#en_btn');

spanBtn.addEventListener("click",()=>{

});