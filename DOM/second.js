var h1=document.getElementsByTagName("h1")[0];
var h2=document.querySelectorAll("h2")[0];
var p=document.querySelectorAll("p")[0];
var ul=document.querySelectorAll("ul")[0];

 function getcolor(){
     var letter="0123456789ABCDEF";
     var color="#"
     for (var i=0;i<6;i++)
     {
     var r=Math.floor(Math.random()*16)
    //  console.log("Random",r)
     color=color+letter[r]
     }
     return color

 }

console.log(ul);
console.log(Math.random()*16);
h1.style.color=getcolor();
h2.style.color=getcolor();
p.style.color=getcolor();
ul.style.color=getcolor();
console.log(getcolor())
