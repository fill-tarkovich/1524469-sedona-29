let btn = document.querySelector(".form-header");
let form = document.querySelector(".hotel-search");
let area = form.querySelector(".form-date");
btn.addEventListener("click", function (evt) {
  form.classList.toggle("hidden");
});
form.addEventListener("submit", function(){
  console.log("sending")
});
