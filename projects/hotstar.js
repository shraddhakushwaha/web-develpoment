let movies=[
    {
    name:"Falcon and the winter soldier",
    des:
    "A story of a young man who fights for freedom in Afghanistan ",
    image:"./hotstarimages/slider 2.PNG"
},
{
name:"Loki",
des:
"Loki is an Indian superhero film directed by Rajendra Pandit",
image:"./hotstarimages/slider 1.PNG"
},
{
name:"Wanda Vision",
des:
"(Brad Pitt) stars as Wanda, daughter of former NASA",
image:"./hotstarimages/slider 3.PNG"
},
{
    name:"Raya and the last dragon",
    des:
    "(Sachin Tendulkar), based on true events.",
    image:"./hotstarimages/slider 4.PNG"
},
{
    name:"Luca",
    des:
    "(Brando) leads Luca to rescue his sister from her abusive",
    image:"./hotstarimages/slider 5.PNG"
}
];
const carousel=document.querySelector('.carousel');
let sliders=[];
let slideIndex=0; //track the current slide

const createSlide=()=>{
if(slideIndex>=movies.length){
 slideIndex=0;
}
//creating dom elements
let slide=document.createElement('div');
var imgElement=document.createElement('img');
var content=document.createElement('div');
var h1=document.createElement('h1');
var p=document.createElement('p');
 
//attaching all elements
imgElement.appendChild(document.createTextNode(''));
h1.appendChild(document.createTextNode(movies[slideIndex].name));
p.appendChild(document.createTextNode(movies[slideIndex].des));
content.appendChild(h1);
content.appendChild(p);
slide.appendChild(imgElement);
carousel.appendChild(slide);

//setting up images
imgElement.src=movies[slideIndex].image;
slideIndex++


//getting elements classname
slide.className='slider';
content.className='slide-content';
h1.className='movie-title';
p.className='movie.des';

sliders.push(slide);
if(sliders.length)
{
    sliders[0].style.marginLeft=`calc(-${100 * (sliders.length-2)}%-${30*(sliders.length-2)}px);`
}
}

for(let i=0;i<3;i++)
{
 createSlide();
}
setInterval(()=>{
    createSlide();
},3000);
