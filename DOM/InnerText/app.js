var box = document.querySelector(".box")

var btn = document.querySelector('#btn')

btn.addEventListener('click', ()=>{
    // box.innerHTML = '<h1>Hello World</h1>'

    box.textContent = "<h1>Hello World</h1>"
})