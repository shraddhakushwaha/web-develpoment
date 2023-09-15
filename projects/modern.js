//i need to get the current position of mouse eveytime it move(x-axis,y-axis value)
//i need to set those x and y values to circular div
//=============
//evertime mouse move we should get notified (mouse listener)
//every time listner gets notified ,we need to get the values for x and y axis,and then update it to the circle
//we are adding event listener on window because hum jab agr kisi div pe lagayenge to ja mouse uss div pe hoga tabhi ye values milegi

let circle=document.querySelector("#circle");
window.addEventListener("mousemove",function(details){
      let xvalue=details.clientX;
      let yvalue=details.clientY;
      this.setTimeout(function(){
        circle.style.top=`${yvalue}px`;
        circle.style.left=`${xvalue}px`;
      },70)
      
});
var tl=gsap.timeline();

const btn=document.querySelector('#btn');
const svgelem=document.querySelector("svg");
btn.addEventListener('click',function()
{
  tl.reverse();
  setTimeout(function(){
    svgelem.classList.add('animated');
  },3500)
});

tl
.from('#wrapper',{
    duration:4,
    scale:.7,
    ease:'Expo.easeInOut',
    opacity:0
})
.from('#whitestrip',{
    duration:2,
    width:0,
    ease:'Expo.easeInOut'
},'-=2.5')
.from('#blackcard',{
    duration:1.5,
    x:50,
    ease:'Expo.easeInOut',
    opacity:0
},'-=1')
.from('#linelem',{
    duration:1.5,
    x:50,
    opacity:0,
    ease:'Expo.easeInOut'
},'-=1')
.from('#linelem .line',{
    duration:2,
    width:0,
    opacity:0,
    ease:'Expo.easeInOut'
},'-=1')
.from('#blackcard p',{
    duration:1.2,
    y:20,
    opacity:0,
    ease:'Expo.easeInOut'
},'-=2')
.from('#sidelem',{
    duration:2,
    x:30,
    opacity:0,
    ease:'Expo.easeInOut'
},'-=1')
