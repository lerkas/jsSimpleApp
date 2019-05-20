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
  let x = document.createTextNode("✖");
  span.className = "close";
  span.appendChild(x);
  li.appendChild(span);

  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  }
}


// Добавляем галочку на выполненном деле
let list = document.querySelector("ul");
list.addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
}, false);

// Создаём закрываюший крестик
let myTodolist = document.querySelectorAll("li");
for (let i = 0; i < myTodolist.length; i++) {
  let span = document.createElement("span");
  let txt = document.createTextNode("✖");
  span.className = "close";
  span.appendChild(txt);
  myTodolist[i].appendChild(span);
}

//Удаляем элемент при нажатиии на крестик

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}



/*






*/