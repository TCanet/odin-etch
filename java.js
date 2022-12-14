const gridContainer = document.querySelector(".grid-container");
const body = document.querySelector('body');
const size = document.querySelector('.gridSize');
const sizeBtn = document.querySelector('.sizeSubmit');
const clearbtn = document.querySelector('.clearbtn');
let mouseButtonDown = false;



for(let x = 0; x < 256; x++)
{
    let div = document.createElement('div');
    div.classList.add('grid-item');
    gridContainer.appendChild(div);
    div.addEventListener('mouseover', function (e) {fillGrid(e);});
    div.addEventListener('mousedown', function (e) {fillGridOnce(e);});
}


function fillGrid(e)
{
    console.log('reached');
    if(mouseButtonDown == true)
    {
        e.target.classList.toggle('filled');
    }
}

function fillGridOnce(e)
{
    e.target.classList.toggle('filled');
}

function clearGrid()
{
    const items = document.querySelectorAll('.grid-item');

    items.forEach(item => 
        {
            item.classList.remove('filled');
        });   
}

function changeGrid()
{
    let sizeX = Number(size.value);

    //${640/sizeX}
    gridContainer.style.cssText = `grid-template-columns: repeat(${sizeX}, ${640/sizeX}px); grid-template-rows: repeat(${sizeX}, ${640/sizeX}px);`;

    while(gridContainer.firstChild)
    {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    for(let x = 0; x < (Math.pow(sizeX, 2)); x++)
    {
        let div = document.createElement('div');
        div.classList.add('grid-item');
        gridContainer.appendChild(div);
        div.addEventListener('mouseover', function (e) {fillGrid(e);});
        div.addEventListener('mousedown', function (e) {fillGridOnce(e);});
    }

}

body.addEventListener('mousedown', () => {mouseButtonDown = true});
body.addEventListener('mouseup', () => {mouseButtonDown = false});
clearbtn.addEventListener('click', clearGrid);
sizeBtn.addEventListener('click', changeGrid);

