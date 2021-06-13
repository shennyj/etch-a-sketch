const container = document.querySelector('.container');
const btnBlack=document.createElement('button');
const btnGray=document.createElement('button');
const btnRGB=document.createElement('button');
const btnReset = document.querySelector('.reset')
const buttonsContainer = document.querySelector('.buttons');

const btnResize=document.querySelector(".gridSize");

window.addEventListener('load',createGrid(16,16));
window.addEventListener('load',onLoad);



function createGrid(col,rows){
    for(let i=0; i<(col*rows);i++){
        const div = document.createElement('div');//represents all grid squares
        div.style.border="1px solid black";
        container.style.gridTemplateColumns=`repeat(${col},1fr)`;
        container.style.gridTemplateRows=`repeat(${rows},1fr)`;
        container.appendChild(div).classList.add('box');
    }
    
}
function onLoad(){
    const boxes=document.querySelectorAll('.box');
    boxes.forEach((box)=>box.addEventListener('mouseover',()=>{
        box.style.backgroundColor='black';
    }))
}



function grayButton(){
    const boxes=document.querySelectorAll('.box');//selects all squares on grid
    btnGray.textContent="Gray";
    btnGray.addEventListener('click',()=>{
        boxes.forEach((box)=>box.addEventListener('mouseover',()=>{
            box.style.backgroundColor="gray";
        }))
    })
    buttonsContainer.appendChild(btnGray).classList.add('btn');
}

grayButton();



function blackButton(){
    const boxes=document.querySelectorAll('.box');
    btnBlack.textContent="Black";
    btnBlack.addEventListener('click',()=>{
        boxes.forEach((box)=>box.addEventListener('mouseover',()=>{
            box.style.backgroundColor="black";
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn');
    
}
blackButton();

function rgbColor(){
    const boxes=document.querySelectorAll('.box');
    btnRGB.textContent="RGB";
    btnRGB.addEventListener('click',()=>{
        boxes.forEach((box)=>box.addEventListener('mouseover',()=>{
            let R=Math.floor(Math.random()*255);
            let G=Math.floor(Math.random()*255);
            let B=Math.floor(Math.random()*255);
            box.style.backgroundColor=`rgb(${R},${G},${B})`

        }))
    })
    buttonsContainer.appendChild(btnRGB).classList.add('btn');
    
}
rgbColor();

function resetButton(){
    const boxes=document.querySelectorAll('.box');
    btnReset.addEventListener('click',()=>{
        boxes.forEach(box => box.style.backgroundColor='#ededed');
        onLoad();
        
        
    })
    buttonsContainer.appendChild(btnReset).classList.add('btn');
    
}
resetButton();

function reset(){
    const boxes=container.querySelectorAll('.box');
    boxes.forEach(box=>box.remove())
}

function gridSize(){
    const boxes=document.querySelectorAll('.box');
    btnResize.addEventListener('click',()=>{
        let size = prompt("Grid Size: ");
        if(size<1||size>64){
            alert("error");
            gridSize();
        }else{
            reset();
            createGrid(size,size);
            grayButton();
            blackButton();
            rgbColor();
            onLoad();
            resetButton();
        }
    })
}
gridSize();
