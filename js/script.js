
var link = document.querySelector(".feedback-link");
var popup = document.querySelector(".feedback-modal");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var storage = localStorage.getItem("name");
link.addEventListener("click", function (evt){
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage){
    name.value = storage;
    email.focus();
  } else{
    name.focus();
  }
});
close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt){
  if (!name.value || !email.value){
    evt.preventDefault();
    popup.classList.remove("modal-error");
  } else {
    localStorage.setItem("name", name.value);
  }
});

window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27 && popup.classList.contains("modal-show")){
    popup.classList.remove("modal-show");
  }
});
