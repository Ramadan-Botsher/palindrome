
 const input = document.getElementById('text-input');
  const result = document.getElementById("result");
  const button = document.getElementById("check-btn");

  button.addEventListener('click',display);

  function palindrome(str) {
  // Remove all non-alphanumeric characters, convert to lowercase, and trim whitespace
  let cleanStr = str.toLowerCase().replace(/[^0-9a-zA-Z]+/g, "").trim();

  // Check if the cleaned string is equal to its reverse
  return cleanStr === cleanStr.split("").reverse().join("");
}


  function display(){
  let value = input.value.trim();
  if (value == ""){
    alert ("Please input a value");
  }else if (palindrome(value) == true){
    result.innerText = `${value} is a palindrome`;
  }else{
    result.innerText = `${value} is not a palindrome`;
  }
  }  
 