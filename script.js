let btn = document.querySelector("button");
let body = document.querySelector("body");

function toggleClass (event) {
  btn.classList.toggle("dark");  
  body.classList.toggle("body-dark"); 
  
  if (document.title === "good morning"){
  document.title = "good night";} 
  else {
    document.title = "good morning";
  }
}

btn.addEventListener("click", toggleClass);

