let number=-5.9
//console.log(math.abs(number))
//console.log(math.ceil(number))
//console.log(math.trunc(number))
//console.log(math.floor())
//console.log(math.sqrt(25))


console.log(Math.max(12,45,10,34))
console.log(Math.min(12,45,10,34))


const stagiaires=[{id:1,nom:"bakarrouch",note:17},
                  {id:1,nom:"sri",note:12},
                  {id:1,nom:"baitou",note:18}
                 ]

let listeNotes = stagiaires.map(function(itemValue){
    return itemValue.note;
})             
console.log(listeNotes)
let maxNote=Math.max(...listeNotes)
//console.log(maxNote)

let mojorantListe = stagiaires.filter(function(itemValue){
    return itemValue.note===maxNote
})

console.log(mojorantListe)
console.log(Math.floor(Math.random()*20)+1)