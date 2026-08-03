let counter = document.getElementById("count");

let count = 0;

function increment() {
    counter.textContent = ++count;
    
}

function decrement() {
    if (count > 0) {
        counter.textContent = --count;
    }
}

function reset() {
    counter.textContent = count = 0;
}


