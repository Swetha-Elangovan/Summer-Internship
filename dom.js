document.body.innerText = "Hai";
document.body.innerHTML = "<div>Hello</div>";
document.body.style.backgroundColor = "pink";

console.log(document.body.children);
const allChild = document.body.children;
allChild[1].style.color="green";

setTimeout(()=> {
    //document.body.innerHTML = "<div>Green</div>";
    //allChild[0].style.color="green";
    allChild[0].style.color="green";
    allChild[0].innerText="Green";  
},3000);

setTimeout(()=> {
    //document.body.innerHTML = "<div>Brown</div>";
    //allChild[0].style.color="brown";
    allChild[1].style.color="brown";
    allChild[1].innerText="Brown"; 
},6000);

setTimeout(()=> {
    //document.body.innerHTML = "<div>Red</div>";
    //allChild[0].style.color="red";
    allChild[2].style.color="red";
    allChild[2].innerText="Red";
},9000);

let refreshvalue = true;

setInterval(()=>{
    allChild[0].style.color = (refreshvalue ? "green" : "orange");
    refreshvalue=!refreshvalue;
}, 2000);

setInterval(()=>{
    allChild[1].style.color = (refreshvalue ? "brown" : "orange");
    refreshvalue=!refreshvalue;
}, 2000);

setInterval(()=>{
    allChild[2].style.color = (refreshvalue ? "red" : "orange");
    refreshvalue=!refreshvalue;
}, 2000);

//selector

const tag = document.getElementsByClassName("CSE");
tag[0].innerText = "Para"
console.log(tag);

const id=document.getElementById("unique");
id.innerText = 'id based selection';
