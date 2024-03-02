//4 Pillars of DOM

//1- Selection of an Element
//2- Changing HTML
//3- Changing CSS
//4- Event Listner

var a = document.querySelector("h1");
a.innerHTML = "Changed HTML"
a.style.color = "red"
a.style.backgroundColor = "black"

a.addEventListener('click' ,()=> {
    // console.log("hey")
    a.innerHTML = "Learning Event Listner"
    a.style.color = "blue"
    a.style.backgroundColor = "pink"
})