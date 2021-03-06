let nextButton = document.getElementById('button-next'),
    mainDiv = document.getElementById('container'),
    userRoll = document.getElementById('user-roll'),
    userResult = document.getElementById('user-result'),
    appRoll = document.getElementById('app-roll'),
    rollInput = document.getElementById('roll-input');
    backBtn = document.getElementById('result-back');
    sliderDiv = document.querySelector('.slider');


let allDiv = document.querySelectorAll('.block'),
    inputDiv = document.getElementsByTagName('form');


userRoll.addEventListener('click', function () {
    userRoll.parentElement.classList.remove('active');
    userRoll.parentElement.classList.add('passive');
    container.children[1].classList.add('active');
})

userResult.addEventListener('click', function (ev) {
    inputDiv[0].parentElement.classList.remove('active');
    inputDiv[0].parentElement.classList.add('passive');
    container.children[2].classList.add('active');
    getDataById(rollInput.valueAsNumber);
    ev.preventDefault();//fix submit bag
})

appRoll.addEventListener('click', function () {
    appRoll.parentElement.classList.remove('active');
    appRoll.parentElement.classList.add('passive');
    container.children[2].classList.add('active');
    getDataById(Math.floor(Math.random() * Math.floor(100)));
})

backBtn.addEventListener('click', function () {
    container.children[2].classList.remove('active');
    container.children[2].classList.add('passive');
    container.children[0].classList.add('active');
})

const rollData = JSON.parse(localStorage.getItem('rollData'));

function getDataById(id) {
    const descriptions = rollData[id-1].descriptions;

    sliderDiv.innerHTML = descriptions.map(d => `<section><div><h2>Table ${d.tableId}</h2></div><hr> <div>${d.description}</div></section>`).join('');
}

function handleChange(input) {
    if (input.value < 0) input.value = 0;
    if (input.value > 100) input.value = 100;
}

function handleRollChange(value) {
    if (value <= 0 || value > 100) {
        userResult.disabled = true;
    } else {
        userResult.disabled = false;
    }
}