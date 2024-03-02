var bulb = document.querySelector('#bulb');
var button = document.querySelector("button");
var flag = true;

button.addEventListener('click', () => {
    flag ? bulb.style.backgroundColor = "yellow" : bulb.style.backgroundColor = "transparent";
    flag = !flag; // Toggle the flag
});
