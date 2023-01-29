const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById("pass1");
let pass2El = document.getElementById("pass2");
let inputEl = document.getElementById("len");
let m = inputEl.value;
let n = characters.length;
function generate(){
for(let i=0; i<8; i++){
    let rand1 = Math.floor(Math.random()*n);
    let rand2 = Math.floor(Math.random()*n);
    pass1El.textContent += characters[rand1];
    pass2El.textContent += characters[rand2];

 }
}