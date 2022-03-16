var restart=document.querySelector("#bt")
var cells =document.querySelectorAll("td")
function clearAllCells(){
    for(cell of cells){
        cell.textContent=""
    }
}

restart.addEventListener("click",clearAllCells)

function changeContent(){
    // console.log("Hello");
    if(this.textContent==" "){
        this.textContent="x"

    }
    else if(this.textContent=="x") {
        this.textContent="o"

    }
    else {
        this.textContent=" "
    }
}
for(cell of cells){
    cell.addEventListener("click",changeContent);
}
// setInterval(changeContent,100)

