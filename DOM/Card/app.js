var friend = document.querySelector('h5')

var addBtn = document.querySelector('#add');
var flag = false
// var remove = document.querySelector('#remove');

addBtn.addEventListener('click', ()=>{
    flag ? (
        friend.innerHTML = "Stranger",
        friend.style.color = "red",
        addBtn.innerHTML = "Add Friend",
        addBtn.style.backgroundColor = "cadetblue"
    ) : (
        friend.innerHTML = "Friend",
        friend.style.color = "green",
        addBtn.innerHTML = "Unfriend",
        addBtn.style.backgroundColor = "red"
    )
    flag = !flag
})

// remove.addEventListener('click', ()=>{
//     friend.innerHTML = "Stranger"
//     friend.style.color = 'red'
// })