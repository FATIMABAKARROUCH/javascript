document.getElementById("btn-google").addEventListener("click", function(){
    open("https://www.google.com/")
})


//appels synchrone
// let a =10
// let b = 19;
// let somme = a + b
// console.log(somme)
// let i = 0
// setInterval(function(){
//       i++;
//       console.log(i);
//  },1000)
// setTimeout(function(){
//     console.log("ok 5 seconds ago")
// },5000)

//appels asynchrone

let stagiaires=getDate(function(listeStagiaires){
    console.log(listeStagiaires);
});


function getDate(myCallBackFunction){
    setTimeout(function(){
        return myCallBackFunction(["yunaa","suun","daenerys"])
    },200)

}