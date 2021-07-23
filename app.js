// let elementel = document.createElement('li');
// let Nodetext = document.createTextNode("CoffeeScript");

// element.appendChild(Nodetext);

// let ul = document.getElementById("ulmenu");
// ul.appendChild(element);
// document.getElementsByTagName("li").style.backgroundColor = "red"


// let li1 = document.createElement("li");
// let li2 = document.createElement("li");
// let li3 = document.createElement("li");
// li1.style.backgroundColor = "red";
// li1.textContent= "hello"
// li2.style.backgroundColor = "green";
// li2.textContent = "glo"
// li3.style.backgroundColor = "orange";
// li3.textContent = "hiiii"


// let myul = document.getElementById("myul");
// myul.appendChild(li1);
// myul.appendChild(li2);
// myul.appendChild(li3);

// const myfunc = (event) => {
//     let str = prompt("add new item")
//     let myul = document.getElementById("myul");
//     let li1 = document.createElement("li");
//     li1.textContent = str;
//     myul.appendChild(li1);

// }



////////////////////////// = //////
let myBody = document.getElementsByTagName("body")[0];
let myUl = document.createElement("ul");

myUl.setAttribute('id', "myUl");

myBody.appendChild(myUl);
let myButton = document.createElement("button");
let textNode = document.createTextNode("Add todo");
myButton.appendChild(textNode);
myButton.addEventListener("click", myfunc);
myBody.appendChild(myButton);



function myfunc() {
    let strTodo = prompt("Enter the next todo: ");
    let myli = document.createElement('li');
    let button = document.createElement("button");
    let text = document.createTextNode("Delet");
    button.appendChild(text);
    myli.textContent = strTodo;
    myli.appendChild(button);
    myUl.appendChild(myli);
    //edit 
    button.addEventListener("click", (event) => {
        event.target.parentElement.style.display = "none";
    })
}






