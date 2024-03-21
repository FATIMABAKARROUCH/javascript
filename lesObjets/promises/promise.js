//consommateur de la promise
// const students = getData().then(function(response){    
//     console.log(response);

//     return getNotes()

//  }).then(function(response){

//  })
         




// //producteur de la promise
//  function getData(){
//  {//     let vfound=false
//     return new Promise(function(resolve,reject){
//         if(vfound === true){
//           resolve([{id:1, nom:"bakarrouch"},{id:2, nom:"yunaSun"}]);
//      }else{
//             reject("not allowed")
//      }
//      })
//      }
//  }
// function getNotes(){
//     return new Promise(function(resolve,reject){
//         resolve([
//                     {idS:1, module:"JS", note:14},
//                     {idS:2, module:"CSS", note:16},
//                     {idS:3, module:"HTML", note:18},
//                     {idS:4, module:"DATABASE", note:15},
//                     {idS:5, module:"POO", note:12},
//                     {idS:6, module:"C#", note:14},

//         ])

//     })
// }  


// getStagiaires().then(
//            stagiaires =>{
//             console.log(stagiaires)
//             return getmodules()
//            }
//         ).then(modules =>{
//             console.log(modules)
//             return getNotes()
//         }).then(notes =>{
//             console.log(notes)
//         }).catch(function(error){
//             console.log(error)
//         }).finally(function(){
//             console.log("finaallly")
//         });
//



//ASYNC AWAIT METHOD

 async function executerCeCode(){
    let vNote=4
    try{
         const stag = await getstagiaires();
         const modules = await getmodule();
         const notes = await getNotes();
         console.log(stag)
         console.log(modules)
         console.log(notes);
         //erreur personnalise
         if(vNote <5){
            throw ("la note est inf a 5")
         }
    }catch(err){
        console.log(err)
    }finally{
        console.log("remove loading....")
    }
 }
 executerCeCode()





 