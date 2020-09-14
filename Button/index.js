const button = document.getElementById('ClickMe')
let count = 0

function click() {
    count++
    button.innerHTML = 'Click me: ' + count

}

button.onclick = click
button.innerHTML = 'Click me: ' + count

