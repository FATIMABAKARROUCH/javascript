
const jours=["monday","tuesday","wednesday","thursday","friday"]

//for (i=0 ; i<=4; i++){

  //  console.log(jours[i])
 //}

for(item in jours){
     console.log(jours[item]);
}
for(jr of jours){
    console.log(jr);
}
let txt="";
jours.forEach(myFunction);
function myFunction(value,index,array){

    txt+= value+ " ";
}
console.log(txt)

//la boucle while
let n=10
while(n>=0){
    console.log(n)
    n=n-1
}
do{
    console.log(n)
   

}
while(n>=0)
//la declaration break
//let text=""

/*for (let i = 0; i < 10; i++)
{
    if(i===3){ break }
    text += "the number is" +i+ "<br>";
}

console.log(text)
*/
//la declaration continue
  
let text=" "
while(n>=0)
for( let i=0; i<5; i++){
    if(i===2){continue
       
    }
    console.log("le nombre e:"+i+ "<br>")
}




    
