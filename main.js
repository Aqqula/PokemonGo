const $btn1 = document.getElementById('btn-smash');
const $btn2 = document.getElementById('btn-blast');

init();

function init() {
    console.log('Start Game!');
}

$btn1.addEventListener('click', function () {
    attack(20, 20, 'smash');
    countClicksBtn1.call($btn1, 'btn-smash', btn1Clk.value)
})
$btn2.addEventListener('click', function () {
    attack(30, 30, 'blast');
    countClicksBtn2.call($btn2, 'btn-blast', btn2Clk.value)
})

const picachu = {
    name: 'picachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-picachu'),
    elProgressbar: document.getElementById('progressbar-picachu'),
    renderHP,
    changeHP,
}

const charmander = {
    name: 'charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-charmander'),
    elProgressbar: document.getElementById('progressbar-charmander'),
    renderHP,
    changeHP,
}

const countClicksBtn1 = countclicks();
const countClicksBtn2 = countclicks();

function countclicks () {
    let currClicks = 0;
    return function (str, clicksLeft) {
        if (currClicks < clicksLeft - 1) {
            currClicks += 1;
            clicksLeft -= 1;
                     console.log(currClicks + ' clicks on ' + str + ' / ' + clicksLeft +' clicks left.');
        }
        else {
            console.log(currClicks + ' clicks on ' + str + '/ 0 clicks left.');
        this.disabled = true;
        }
    }
}

function random(num) {
    return Math.ceil(Math.random() * num);

}

function attack(cdamage, pdamage, atack) {
    console.log(atack);
    picachu.changeHP(random(pdamage));
    charmander.changeHP(random(cdamage));
    picachu.renderHP();
    charmander.renderHP();
    logOut();
}

function logOut(first, second) {
    const { name: name1, damageHP, defaultHP } = picachu;
    const { name: name2 } = charmander;
    const logs = [
        `${name1} вспомнил что-то важное, но неожиданно ${name2}, не помня себя от испуга, ударил в предплечье врага.[${damageHP} / ${defaultHP} ]  `,
        `${name1} поперхнулся, и за это ${name2} с испугу приложил прямой удар коленом в лоб врага. [${damageHP} / 100 ]`,
        `${name1} забылся, но в это время наглый ${name2}, приняв волевое решение, неслышно подойдя сзади, ударил. [${damageHP} / ${defaultHP} ]`,
        `${name1} пришел в себя, но неожиданно ${name2} случайно нанес мощнейший удар. [${damageHP} / ${defaultHP} ]`,
        `${name1} поперхнулся, но в это время ${name2} нехотя раздробил кулаком <вырезанно цензурой> противника. [${damageHP} / ${defaultHP} ]`,
        `${name1} удивился, а ${name2} пошатнувшись влепил подлый удар. [${damageHP} / ${defaultHP} ]`,
        `${name1} высморкался, но неожиданно ${name2} провел дробящий удар. [${damageHP} / ${defaultHP}] `,
        `${name1} пошатнулся, и внезапно наглый ${name2} беспричинно ударил в ногу противника [${damageHP} / ${defaultHP}]`,
        `${name1} расстроился, как вдруг, неожиданно ${name2} случайно влепил стопой в живот соперника. [${damageHP} / ${defaultHP} ]`,
        `${name1} пытался что-то сказать, но вдруг, неожиданно ${name2} со скуки, разбил бровь сопернику. [${damageHP} / ${defaultHP} ]`,
    ];
    const $logs = document.querySelector('#logs');
    const $p = document.createElement('p');
    $p.innerText = logs[random(logs.length) - 1];
    $logs.insertBefore($p, $logs.children[0]);
}

function renderHP() {
    this.elHP.innerText = this.damageHP + '/' + this.defaultHP;
    this.elProgressbar.style.width = this.damageHP + '%'; 
}

function changeHP(count) {
    const { name } = this;
    if (this.damageHP < count) {
        this.damageHP >= 0,
            $btn1.disabled = true,
            $btn2.disabled = true,
            alert('Для ' + name + ' GAME OVER!'),
            location.reload()
    } else {
        this.damageHP -= count;
    }

}