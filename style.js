function Check() {
    let char = document.getElementById("char").value;
    let result = document.getElementById("result");
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u" ||
      char === "a"
    ) {
      result.innerHTML = `The character '${char}' is <strong>vowel</strong>`;
      
    }
    else{
      result.innerHTML = `The character '${char}' is not a <strong>vowel</strong>`;
      
    }
  }