const container = document.querySelector('.container');

let color = 'black';

function createGrid(size) {
    const gridSize = size * size 
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < gridSize; i++) {
        const div = document.createElement('div')
        div.classList.add('cell')
        div.addEventListener('click', function (event) {
            event.target.style.backgroundColor = color;
        })
        container.appendChild(div)
    }
}

createGrid(5)