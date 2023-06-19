function generate(){
    let password = "";
    let uppercaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercaseSet = "abcdefghijklmnopqrstuvwxyz";
    let numSet = "1234567890";
    let symbolSet = "!@#$%^&*()_+-=`~{}|][;':,./<>?";

    let uppercase = document.getElementById("uppercase").checked;
    let lowercase = document.getElementById("lowercase").checked;
    let symbols = document.getElementById("symbols").checked;
    let numbers = document.getElementById("numbers").checked;
    let length = document.getElementById("len").value;
    let exclude = document.getElementById("similar").checked;

    let charset = lowercaseSet;

    if(!exclude){
        lowercaseSet += "ilo";
        uppercaseSet += "IO";
        numSet += "01";
    }

    if(uppercase){
      charset += uppercaseSet;
    }

    if(lowercase){
        charset += lowercaseSet;
    }

    if(numbers){
        charset += numSet;
    }

    if(symbols) {
        charset += symbolSet;
    }
    
    
    for(let i=0; i<length; i++){
    
       password += charset[Math.floor(Math.random()*charset.length)];
     }
  document.getElementById("password").value = password;

 let mnemonic = generateMnemonic(password);
 
 document.getElementById("mnemonic").textContent = mnemonic;
}

 

function generateMnemonic(password) {
    let words = {
      "a": ["apple", "ant", "alligator"],
      "b": ["banana", "bat", "book"],
      "c": ["cherry", "cat", "car"],
    };

    let mnemonic = "";

    for(let i=0; i<password.length; i++){
        let char = password[i].toLowerCase();
         if(char in words){
            let word = words[char][Math.floor(Math.random() * words[char].length)];
            mnemonic += word + " ";
            }
            else {
                mnemonic += password[i] + " ";
            }
         }

         return mnemonic.trim();
        
    }
    