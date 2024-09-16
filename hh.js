let j=document.getElementById("r")
function h(){
   j.src="r/i2.jpg"
}

let j3=document.getElementById("u")
function u(){
   j3.src="r/s2.jpg"
}

let m3=document.getElementById("m")
function m(){
   m3.src="r/m2.jpg"
}
let o1=document.getElementById("o")
function o(){
   o1.src="r/o2.jpg"
}
let sh1=document.getElementById("sh")
function sh(){
   sh1.src="r/s4.jpg"
}
let xo=document.getElementById('xo')

let f=document.getElementById('d')
let p=document.getElementById('ph')
p.onclick=function(){f.style.cssText='display: ;'; xo.style.cssText='display:none ;'}
let x='x'
let ti=document.getElementById('ti')
let a=[]
function end(n1,n2,n3)
{document.getElementById('y'+n1).style.cssText='background:  linear-gradient(299deg,rgb(200, 100, 12),rgb(51, 4, 82));'
document.getElementById('y'+n2).style.cssText='background:  linear-gradient(299deg,rgb(42, 100, 12),rgb(51, 4, 82));'
document.getElementById('y'+n3).style.cssText='background:  linear-gradient(299deg,rgb(123, 100, 120),rgb(51, 4, 82));'
ti.innerHTML=`win is ${a[n1]}`
setInterval(function(){ti.innerHTML+='.'},1000)
setTimeout(function (){location.reload()},4000)
}
function win() {for(let i=1;i<10;i++){a[i]=document.getElementById('y'+i).innerHTML}
   if(a[1]==a[2]&&a[2]==a[3]&&a[3]!='')
   {end(1,2,3)}
   else if(a[4]==a[5]&&a[5]==a[6]&&a[6]!='')
      {end(4,5,6)}
   else if(a[7]==a[8]&&a[8]==a[9]&&a[9]!='')
   
      {end(7,8,9)}
   
       else if(a[1]==a[4]&&a[4]==a[7]&&a[7]!='')
      
         {end(1,4,7)}
   
          else if(a[2]==a[5]&&a[5]==a[8]&&a[8]!='')
             {end(2,5,8)}
          else if(a[3]==a[6]&&a[6]==a[9]&&a[9]!='')
             {end(3,6,9)}
          else if(a[1]==a[5]&&a[5]==a[9]&&a[9]!='')
             {end(1,5,9)}
          
}

let ran=["x","o"]
let ranr=Math.floor(Math.random()*ran.length)
let rank=ran[ranr]

setInterval(function (){h.innerHTML=`${rank}`},1000)


function game(id){let h=document.getElementById(id)

if (h.innerHTML==''&& x=='x') {
   h.innerHTML="x"
   
ti.innerHTML='o'
x='o'

}
else if(h.innerHTML==''&& x=='o'){
   h.innerHTML="o"
ti.innerHTML='x'
x='x'}
win()
}
let ga=document.getElementById("ga")
ga.onclick=function(){f.style.cssText='display: none;'; xo.style.cssText='display: ;'}

// قائمة الأسماء
const names = ["Ahmed", "Sara", "Khalid", "Noura", "Ali"];

// اختيار اسم عشوائي
const randomIndex = Math.floor(Math.random() * names.length);
const randomName = names[randomIndex];

console.log(randomName);



let h7=document.getElementById("h7")
let w=document.getElementById("w")
let m2=document.getElementById("m2")
let or=["ورقة","حجر","مقص"]
let rc=Math.floor(Math.random()*or.length)
let rr=or[rc]
let in2=document.getElementById("in2")
in2.innerHTML.charCodeAt='ghada'
let cad=document.getElementById("cad")
let cd=document.getElementById("cd")
cd.onclick=function(){cad.style.cssText='display:inline'}