import { random, getElById, disableButton } from './utils.js'
import Pokemon from './pokemon.js'
import createLog from './logs.js'

const player1 = new Pokemon({ name: 'Pikachu', hp: 100, type: 'electric', selectors: 'character' })
const player2 = new Pokemon({ name: 'Charmander', hp: 100, type: 'fire', selectors: 'enemy' })

const $btnKick = getElById('btn-kick')
const $btnBump = getElById('btn-bump')

const MAX_DAMAGE_KICK = 60
const MAX_DAMAGE_BUMP = 20

const buttonClickCounter = (num, el) => {
  const MAX_CLICKS = num
  let count = MAX_CLICKS

  const innerText = el.innerText
  el.innerText = `${innerText} (${count})`

  return () => {
    count--

    if (count === 0) {
      disableButton(el)
    }

    el.innerText = `${innerText} (${count})`
    return count
  }
}

const countJolt = buttonClickCounter(btn1Clk.value, $btnKick)
$btnKick.addEventListener('click', function () {
  countJolt()
  player1.changeHP(random(MAX_DAMAGE_KICK), (count, damageHP, defaultHP) => {
    createLog(player1, player2, count, damageHP, defaultHP)
  })
  player2.changeHP(random(MAX_DAMAGE_KICK), (count, damageHP, defaultHP) => {
    createLog(player2, player1, count, damageHP, defaultHP)
  })
})

const countBump = buttonClickCounter(btn2Clk.value, $btnBump)
$btnBump.addEventListener('click', function () {
  countBump()
  player2.changeHP(random(MAX_DAMAGE_BUMP), (count, damageHP, defaultHP) => {
    createLog(player2, player1, count, damageHP, defaultHP)
  })
})
