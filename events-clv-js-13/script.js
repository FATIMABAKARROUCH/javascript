// document.getElementById("input1").addEventListener("keydown",function(event){
//     if (event.keyCode===27){
//     console.log("you clicked on enter,  down")
//     document.querySelector("#input1").style.backgroundColor="aqua";
//     }
// })
// document.getElementById("input1").addEventListener("keypress",function(event){
//     if (event.keyCode===13){
//     console.log("you clicked on enter,  press")

//     }
// })


document.getElementById("nom").addEventListener("keypress",function(){
    let nom= document.getElementById('nom').value;
    if (nom.length>12){
        document.querySelector("#nom").style.border="red 1px solid"
    }
    

})