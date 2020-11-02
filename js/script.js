let btn = document.querySelector(".form-header");
let form = document.querySelector(".hotel-search");
let date = form.querySelectorAll(".form-date");
let number = form.querySelectorAll(".form-number");
let search = form.querySelector(".search-button");
let map = document.querySelector(".map");

form.classList.add("hidden");
map.classList.remove("hidden");
form.classList.add("bounce");

btn.addEventListener("click", function () {
  form.classList.remove("required")
  form.classList.toggle("hidden");
})

search.addEventListener("click", function (evt) {
  if (!date.value || !number.value) {
    form.classList.add("required")
  } else {
    form.classList.remove("required")
  }
})
