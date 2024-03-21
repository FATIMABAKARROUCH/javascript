// const students ={
//     "id": 1,
//     "nom":"bakarrouch",
//     "prenom":"fatima",
//     "age":18
// }
// //objet JS ===> objet JSON
// let studentsJson = JSON.stringify(students)
// console.log(students);
// console.log(studentsJson)
// //objet JSON ===> objet JS

// studentsJson =JSON.parse(studentsJson)
// console.log(studentsJson.age)

document.getElementById("btn-load").addEventListener("click", loadTxt)
function loadTxt(){
    console.log("okay")
    let request = new XMLHttpRequest();
    request.open("GET", "sample.txt",true);
    
    request.onreadystatechange=function(){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("conatiner").innerHTML =this.responseText
           
        }

    }

    request.send()
}