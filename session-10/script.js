//creation des elements dom
/*document.querySelector(".creer-titre").addEventListener("click",function(){
    const parent =document.querySelector(".section-01");

    const titre=document.createElement("h1");
    titre.innerHTML="this is a title";
    titre.style.backgroundColor="aqua";
    titre.style.color="blue";
    parent.prepend(titre)
    const p =document.createElement("p");
    p.innerHTML="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error a sit fugiat atque, repudiandae tenetur iure accusantium reiciendis aspernatur. Excepturi assumenda nobis ratione unde cum pariatur nesciunt veritatis laborum repudiandae.";
    p.style.backgroundColor="aqua";
    parent.append(p)
    const input =document.createElement("input");
    parent.append(input);
})
document.querySelector(".supprimer").addEventListener("click",function(){
    const parent = document.querySelector(".section-01");
    const enfant = document.querySelector(".paragraph-1");
    document.querySelector(".h4").remove();
    parent.removeChild(enfant)
})
*/

// document.querySelector(".btn-remplacer").addEventListener("click",function(){
//     const parent = document.querySelector(".section-01");
//     const ancElement= document.querySelector(".paragraph-1");
//     const nouveElement=document.querySelector(".h4")

//     parent.replaceChild(nouveElement,ancElement)


// })
document.querySelector(".conteneur").addEventListener("click",function(){
    const vConteneur=document.createElement("div");
    vConteneur.classList.add("container");
    vConteneur.classList.add("encadre");

    document.body.append(vConteneur)
    //set attributes

    vConteneur.setAttribute("id","Contenur");

      
})


