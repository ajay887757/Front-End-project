// var Name= prompt("Enter Your Name ")
// alert("Hello "+Name + " Good Morning")



function getcolor(){
    var letter="0123456789ABCDEF";
    var color="#"
    for (var i=0;i<6;i++)
    {
    var r=Math.floor(Math.random()*16)
    console.log("Random",r)
    color=color+letter[r]
    } 
    return color

}
function getRandomName(){
    var names=['Hydrabad',"Bihar","Delhi","Up","Mumbai","pune","Madhubani"]
    var r=Math.floor(Math.random()*6)
    // console.log(r);
    // return document.querySelector("h1").innerHTML=names[r]
    return names[r]
}

var myh1=document.querySelector("h1")
var mybutton=document.querySelector("button")
function changecolor(){
    myh1.style.color=getcolor();
    myh1.textContent=getRandomName()

 
}
var body=document.querySelector("body")
function change_background(){
    mybutton.style.backgroundColor="blue"
    body.style.backgroundColor=getcolor()
}

// myh1.addEventListener("click",changecolor)
// myh1.addEventListener("dblclick",changecolor)
// myh1.addEventListener("mouseover",changecolor) 
// myh1.addEventListener("mouseout",changecolor)
mybutton.addEventListener("click",change_background)
// setInterval(change_background,1000);
