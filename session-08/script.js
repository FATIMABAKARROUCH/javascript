/*console.log(document.querySelector(".nom").value);
document.querySelector(".nom").value="daeenerys"

console.log(document.querySelector(".age").value);


let a=(document.querySelector(".n1").value);
a=Number(a)
let b=(document.querySelector(".n2").value);
b=Number(b)
let somme=a+b
document.querySelector(".somme").value=somme

if (somme>20){
    document.querySelector(".somme").style.backgroundColor="red";
 
    
}

let calculeClick = function(e){
    e.preventDefault();
    console.log("you clicked me")


}

document.querySelector(".btn").addEventListener("click",function(e){
                                                                             e.preventDefault();
                                                                             console.log("you clicked me")
 } )*/
 let calculeF = (e)=>{
    e.preventDefault();
    let n1=Number(document.querySelector(".n1").value);
    let n2=Number(document.querySelector(".n2").value);
    document.querySelector(".somme").textContent=n1+n2


}

document.querySelector(".btn").addEventListener("click",calculeF);





