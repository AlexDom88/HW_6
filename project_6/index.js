//tack_1

// На HTML-сторінці є елемент div:
//     <body>	
// 	<div id="test">First</div>
//   </body>	
// Потрібно змінити вміст елемента із First на Last. Доступіться до елемента div хоча б 2 способами

function changeText() {
    let elem = document.getElementById("test");
    elem.innerHTML = "Second";
    return elem
}
changeText()
function changeText() {
    let elem = document.getElementsByTagName("div");    
    elem[0].innerHTML = "Second";
    return elem
}
changeText()

//tack_2
// На сторінці є елемент зображення:
//      <body>
// 		   <img class="image" src="dog.jpg">
//      </body>
// Потрібно змінити зображення dog.jpg на cat.jpg.
// Виведіть в модальному вікні вміст тегу img з новим зображенням.


function changeImg() {
    let elem = document.querySelector(".image");
    elem.setAttribute("src", "img/cat.jpg");
    alert(elem.getAttribute("src"));      
}
changeImg()

//tack_3

/* <body>
	<h2>Article header</h2>      
      <div id="text">
        <p>First paragraph</p>
        <p>Second paragraph</p>
        <p>Third paragraph</p>
      </div>
	<p>Another text</p>
    </body>
На вказаній HTML-сторінці необхідно отримати всі елементи всередині тега div по селектору (використати метод document.querySelectorAll). І вивести їх вміст із вказанням номеру абзацу в такому форматі:
Selector text 0: First paragraph
Selector text 1: Second paragraph
Selector text 2: Third paragraph */



function showParagraph() {
    let arrElem = document.querySelectorAll("div p");
    for(let i = 0; i< arrElem.length; i++) {
        console.log("Selector text " + i + ": " + arrElem[i].innerText);
    }
}
showParagraph()

// tack_4

// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. У модальному вікні необхідно послідовно вивести вміст:
// 	1) першого елемента списку
// 	2) останнього елемента списку
// 	3) другого елемента списку
// 	4) четвертого елемента списку
// 	5) третього елемента списку
// Зробіть завдання 2 різними способами.	
// Приклад:
// •	1
// •	2
// •	3
// •	4
// •	5
// Результат виводу: 1, 5, 2, 4, 3


function showElements(){
    alert(document.querySelectorAll('li')[0].innerText);
    alert(document.querySelectorAll('li')[4].innerText);
    alert(document.querySelectorAll('li')[1].innerText);
    alert(document.querySelectorAll('li')[3].innerText);
    alert(document.querySelectorAll('li')[2].innerText);
}
showElements()

function showElements(){
    let elems = document.querySelector("#list").children;
    alert(elems[0].innerText);
    alert(elems[4].innerText);
    alert(elems[1].innerText);
    alert(elems[3].innerText);
    alert(elems[2].innerText);  
}
showElements()

//tack_5

// Для сторінки
// 		  <body>
// 		       <h1>I'am a big header!!!</h1>
//         <div id="myDiv">
//             <p>First paragraph</p>
//             <p>Second paragraph</p>
//             <p>Third paragraph</p>
//             <p>Fourth paragraph</p>
//         </div>
//         <ul id="myList">
//             <li>Make</li>
//             <li>me</li>
//             <li>horizontal!</li>
//         </ul>
//         <span>Make me invisible, please!</span>
// 	    </body>

function changeElements() {
    document.getElementsByTagName("h1")[0].style.backgroundColor = "green";
    document.getElementById("myDiv").firstElementChild.style.fontWeight = "bold";
    document.getElementById("myDiv").children[1].style.color = "red";
    document.getElementById("myDiv").children[2].style.textDecoration = "underline";
    document.getElementById("myDiv").lastElementChild.style.fontStyle = "italic";
    document.getElementById("myList").style.display = "flex";
    document.getElementById("myList").style.listStyle = "none";
    document.querySelector("span").style.display = "none";
}
changeElements()

//tack_6
// Задано HTML-сторінку:
//     <body>
// <input type="text" id="input1" value="Text1">
// <input type="text" id="input2" value="Text2">
//   </body>
// 1)	Користувач почергово вводить 2 повідомлення (використати prompt()). 1-е повідомлення записується в 1-ий <input>, 2-ге – в 2-ий.
// 2)	Поміняти значення 1-го і 2-го інпутів місцями.

function getMessage() {
    const inp1 = prompt();
    const inp2 = prompt();
    input1.setAttribute('value', inp1);
    input2.setAttribute('value', inp2);
    input1.value = inp2;
    input2.value = inp1;    
}
getMessage()

//tack_7

// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// 		<body>
// 		  <main class="mainClass check item"> 	
// 		        <div id="myDiv">
//            <p>First paragraph</p>           
//          </div>
//        </main> 
// 	    </body>


function createPage() {
  const main = document.createElement('main');
  const div = document.createElement('div');
  const p = document.createElement('p');
  document.body.append(main);
  main.classList.add('mainClass', 'check', 'item');
  main.append(div);
  div.id = 'myDiv';
  div.append(p);
  p.innerHTML='First paragraph';
}
createPage();