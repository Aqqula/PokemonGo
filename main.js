const $btn1 = document.getElementById('btn-smash');
const $btn2 = document.getElementById('btn-blast');

init();

function init() {
    console.log('Start Game!');
   
}

$btn1.addEventListener('click', function () {
    attack(20,20, 'smash')
})
$btn2.addEventListener('click', function () {
    attack(50, 50, 'blast')
})

const picachu = {
    name: 'Picachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-picachu'),
    elProgressbar: document.getElementById('progressbar-picachu'),
    renderHP,
    changeHP,
}

const charmander = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-charmander'),
    elProgressbar: document.getElementById('progressbar-charmander'),
    renderHP,
    changeHP,
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

function attack(cdamage, edamage, atack) {
    console.log(atack);
    picachu.changeHP(random(edamage));
    charmander.changeHP(random(cdamage));
    picachu.renderHP();
    charmander.renderHP();
}

function renderHP() {
    this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
    this.elProgressbar.style.width = this.damageHP + '%';
}

function changeHP(count) {
    if (this.damageHP < count) {
        this.damageHP = 0,
            $btn1.disabled = true,
            $btn2.disabled = true,
            alert('Для ' + this.name + ' GAME OVER!'),
            location.reload()
    } else {
        this.damageHP -= count;
    }
}




