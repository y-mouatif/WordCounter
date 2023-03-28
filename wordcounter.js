let characters = document.getElementById("characters");
let words = document.getElementById("words");
let inputText = document.getElementById("input-textarea");



inputText.addEventListener("input",() => {
       characters.textContent = inputText.value.length;/*character count*/
    //trim and store it in a new variable
       let text = inputText.value.trim();
       words.textContent = text.split(/\s+/).filter((item) => item).length;/*words count*/
     });
     
renderText(characters,characters.textContent);
renderText(words, words.textContent);