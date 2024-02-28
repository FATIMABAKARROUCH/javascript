// console.log(document.body.childNodes);
// console.log(document.body.childNodes[1]);

// //pour acceder a un element
// console.log(document.querySelector("nav").parentNode);
// console.log(document.querySelector("nav").previousElementSibling);
// console.log(document.querySelector("ul").lastElementChild.previousElementSibling);
// console.log(document.ELEMENT_NODE)
// console.log(document.ATTRIBUTE_NODE)
// console.log(document.TEXT_NODE)
// console.log(document.nodeName);

//LES EVENEMENTS
document.querySelector("div").style.border="solid 1px black";
document.querySelector("div").style.width="200px";
document.querySelector("div").style.height="150px";
document.querySelector("div").style.textAlign="center";

document.queryselector(".afficher").addEventlistener("click",function(){
  
    let nom= document.getElementById('nom').value;
    let prenom= document.getElementById('prenom').value;
    let age= document.getElementById('age').value;
    
})
let infosList=[];
let infoList={
    nom:nom,
    prenom:prenom,
    age:age
}

















