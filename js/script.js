let btn = document.querySelector(".form-header");
let form = document.querySelector(".hotel-search");
let date = form.querySelectorAll(".form-date");
let number = form.querySelectorAll(".form-number");
let search = form.querySelector(".search-button");

form.classList.add("hidden");

btn.addEventListener("click", function () {
  form.classList.toggle("hidden");
})

search.addEventListener("click", function (evt) {
  if (!date.value || !number.value) {
    form.classList.add("required")
  } else {
    form.classList.remove("required")
  }
})
