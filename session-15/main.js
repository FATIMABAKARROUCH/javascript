function stagiaire(nom, prenom, age, branche){
this.nom=nom;
this.prenom=prenom;
this.age=age;
this.branche=branche;
this.presentesVous=function(){
    // console.log("she is " +this. nom +" "+this.prenom)
    console.log(`I am ${this.nom} ${this.prenom}`)
}
}
const stagiaire2= new stagiaire("srii", "malak", 19,"gestion")
console.log(stagiaire2.presentesVous())





// stagiaire1={
//     nom:"BAKARROUCH",
//     prenom:"FATIMA",
//     age:18,
//     branche:"DD",

//     presentesVous:function(){
//         console.log("I am " +this. nom +" "+this.prenom)
//     }
// }

// console.log(stagiaire1.nom)
// console.log(stagiaire1.prenom)
// console.log(stagiaire1.presentesVous())

// function Achat(id,article,prix,qte){
//     this.id=id;
//     this.article-article;
//     this.prix-prix;
//     this.qte=qte;



//     this.CalculerTVA=function(){
//         let TVA=20/100
//         let total=this.prix * this.qte
//         let totalTTC=total+(total * TVA)
//         // console.log(`Le TVA est:${total+prix*20}`)
//         return totalTTC
      
//     }
// }
// const clc= new Achat(2,"bijoux",100,4)
// console.log(clc.article);
// console.log("le total TTC est: "+clc.CalculerTVA());

class Achat{
    constructor(id,article,prix,qte){
         this.id=id;    
    }
}





let branche="DD105";
let nom="yuna"
let name="DAAAAENERYS"
let phrase="this is a char method"
console.log(branche.length)
console.log(branche.charAt(3))
console.log(branche.substring(2,5))
console.log(nom.toUpperCase())
console.log(name.toLowerCase())
console.log(name.startsWith("D"))
console.log(Array.from(nom))
console.log(phrase.split("-"))

let vDate= new Date();
console.log(vDate.getFullYear())
console.log(vDate.getMonth())
console.log(vDate.getHours())
console.log(vDate.getMinutes())


let vDate2= new Date("2023-10-29");
console.log(vDate2);
console.log(vDate2.setMonth("02"))
