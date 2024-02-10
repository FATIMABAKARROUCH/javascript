//function greet(){
   // console.log("hello")
//}
//greet()
//function expressions
//function somme(a,b){
//    return a+b
//}

//let sm =somme(5,9)
//console.log(sm)
//les fonctions flecheses(arow function)
let a =function(){
    return console.log("hello world");
};
let greet=()=> console.log("hello isfo")

let nomComplet = (nom,prenom) =>{
    let fullname=nom + " "+ prenom
    return fullname;

};

console.log(nomComplet("bakarrouch","Fatima"));
greet();
//les expression lambdas
//map(il retourn un nouveau tableau)
/*days=["monday","tuesday","wednesday","thursday","friday"]

days.map((item) =>{
    if(item== "thursday"){
        item = item+ "* jour ferier" 
    }
  
    return console.log(item)
    

})
*/
//map c'est une methode qui retourne un nouveau tableau
const stgiaires = [
    {nom:"bakarrouch",prenom:"fatima",age:18},
    {nom:"boukri",prenom:"ikram",age:19},
    {nom:"aitsaid",prenom:"kawter",age:18},
    {nom:"badioui",prenom:"ilham",age:20}
   

]
/*stgiaires.map((object) => {
    console.log(object['nom']+" "+object['prenom'])

})
*/
let nomStagiaires;
nomStagiaires = stgiaires.map((info) => {
    fullName = info["nom"]+" "+info["prenom"]
    return fullName
})

console.log(stgiaires)
console.log(nomStagiaires)


let namAge;
namAge=stgiaires.map((item,index,arrStagiaires) =>{
   /* console.log(item);
    console.log(index);
    console.log(arrStagiaires);
    return index*/
    let st;
    st={...item, branche:'DD',id:(index+1)};
    return st;
  
    
    
});

console.log(namAge)
let remarqueAge;
remarqueAge=stgiaires.map((item,index,arrStagiaires) =>{
  
    let st;
    if(item)
    st={...item, branche:'DD',id:(index+1),remarque:'age inferieur a 20 ans'};
})

   





