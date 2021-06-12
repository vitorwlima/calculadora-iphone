const btnsNumber = document.querySelectorAll('.btn-number')

const btnDivision = document.querySelector('.btn-division')
const btnMultiplication = document.querySelector('.btn-multiplication')
const btnMinus = document.querySelector('.btn-minus')
const btnAdd = document.querySelector('.btn-add')

const btnEquals = document.querySelector('.btn-equals')
const btnDot = document.querySelector('.btn-dot')
const btnClear = document.querySelector('.btn-clear')
const btnSwitch = document.querySelector('.btn-switch')
const btnPercentage = document.querySelector('.btn-percentage')

const display = document.querySelector('.display')

let previousValue
let selectedOperation
let newValue = false

const addNumberToDisplay = event => {
  if (display.innerHTML[0] === '0' && !display.innerHTML.includes('.'))
    display.innerHTML = ''

  if (selectedOperation && previousValue === +display.innerHTML && !newValue) {
    display.innerHTML = ''
    newValue = true
  }
  
  display.innerHTML = display.innerHTML + event.target.innerText
}

const handleOperation = operation => {
  if (selectedOperation === operation) return
  selectedOperation = operation
  previousValue = +display.innerHTML
}

const handleEquals = () => {
  let currentValue = +display.innerHTML
  if (selectedOperation === 'addition')
    display.innerHTML = previousValue + currentValue

  if (selectedOperation === 'minus')
    display.innerHTML = previousValue - currentValue

  if (selectedOperation === 'multiplication')
    display.innerHTML = previousValue * currentValue

  if (selectedOperation === 'division')
    display.innerHTML = previousValue / currentValue

  previousValue = ''
  selectedOperation = ''
  newValue = false
}

const handleAddDot = () => {
  if (!display.innerHTML.includes('.'))
    display.innerHTML = display.innerHTML + '.'
}

const handleClear = () => {
  display.innerHTML = '0'
  selectedOperation = ''
}

const handleSwitchSignal = () => {
  display.innerHTML = +display.innerHTML * -1
}

const handlePercentage = () => {
  display.innerHTML = +display.innerHTML / 100
}

btnsNumber.forEach(btnNumber =>
  btnNumber.addEventListener('click', addNumberToDisplay)
)

btnDivision.addEventListener('click', () => handleOperation('division'))
btnMultiplication.addEventListener('click', () =>
  handleOperation('multiplication')
)
btnMinus.addEventListener('click', () => handleOperation('minus'))
btnAdd.addEventListener('click', () => handleOperation('addition'))

btnEquals.addEventListener('click', handleEquals)
btnDot.addEventListener('click', handleAddDot)
btnClear.addEventListener('click', handleClear)
btnSwitch.addEventListener('click', handleSwitchSignal)
btnPercentage.addEventListener('click', handlePercentage)
