const word = document.querySelector('#fn');
const display = document.querySelector('#display');
const button = document.querySelector('#btn_check');

button.addEventListener('click', (e) => { 

    e.target.focus();
    
    let checkWord = word.value;

    if (checkWord === "") {
        
        alert("Please Enter The word");
    }

    let palindromeChecker = palindrome(checkWord);
    display.innerHTML = ` ${checkWord} ${palindromeChecker} <hr/ >`;

    setTimeout(() => {

        display.innerHTML = "";

    }, 8000);

});

const palindrome = (string) => { 

    if (string === "") {
        
        
        return "Please Enter the word!!!";
    }

    // Remove all non-alphanumeric characters and convert to lower case
    let cleanStr = string.replace(/[^A-Za-z0-9]/g, "").toUpperCase();

     // Reverse the cleaned string
    let reverseStr = cleanStr.split("").reverse().join("");
    
    // Check if the cleaned string is the same as the reversed string
    if (cleanStr === reverseStr) {
        return "The Word is Palindrome";
    } else {
        return "The word is not Palindrome";
   }
};





/*function palindrome(str) {

   // Remove all non-alphanumeric characters and convert to lower case
  let cleanStr = str.replace(/[^A-Za-z0-9]/g, "").toUpperCase();

 // Reverse the cleaned string
  let reverseStr = cleanStr.split("").reverse().join("");

   // Check if the cleaned string is the same as the reversed string
   return cleanStr === reverseStr;
 
}

let pal = palindrome("not");
console.log(pal);*/