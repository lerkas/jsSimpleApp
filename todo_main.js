'use strict';

function newElement() {
  let li = document.createElement("li");
  let inputValue = document.querySelector("#input").value;
  let text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === "") {
    alert("Надо что-то написать");
  } else {
    document.querySelector("#ul").appendChild(li);
  }
  document.querySelector("#input").value = "";

  let span = document.createElement("span");
  let txt = document.createTextNode("✖");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}

// Создаём закрываюший крестик
let myTodolist = document.getElementsByTagName("li");
for (let i = 0; i < myTodolist.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("✖");
  span.className = "close";
  span.appendChild(txt);
  myTodolist[i].appendChild(span);
}

/*
Удаляем элемент при нажатиии на крестик
Не могу понять почему не работает при такой записи document.querySelectorAll(".close");
*/
let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}

// Добавляем галочку на выполненном деле
let list = document.querySelector("ul");
list.addEventListener("click", function(ev) {
  if (ev.target.tagName === "LI") {
    ev.target.classList.toggle("checked");
  }
}, false);

