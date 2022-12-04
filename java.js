const gridContainer = document.querySelector(".grid-container");

for(let x = 0; x < 256; x++)
{
    let div = document.createElement('div');
    div.classList.add('grid-item');
    gridContainer.appendChild(div);
    div.addEventListener('mousedown', function (e) {fillGrid(e);});
}

function fillGrid(e)
{
    e.target.classList.toggle('filled');
}



