const calc = document.getElementById('signs')
const clearButton = document.getElementById('clear')
const plusButton = document.getElementById('plus')
const evalButton = document.getElementById('eval')
const resultInput = document.getElementById('result')

const signsArray = [
  [0, 1, 2, 3],
  [4, 5, 6, 7]
]

// Adding buttons to a calculator
signsArray.forEach(signs => {
  const row = document.createElement('div')
  row.className = 'row'

  signs.forEach(sign => {
    const signElement = document.createElement('input')
    signElement.type = 'button'
    signElement.className = 'btn sign'
    signElement.value = sign.toString()
    signElement.addEventListener('click', () => {
      if (resultInput.value.endsWith('0') && resultInput.value[resultInput.value.length - 1]) {
        if (sign !== 0) {
          resultInput.value = resultInput.value.slice(0, resultInput.value.length - 1) + sign
        }
        return
      }

      if (resultInput.value === '0') {
        resultInput.value = sign
      } else {
        resultInput.value += sign
      }
    })
    row.appendChild(signElement)
  })

  calc.appendChild(row)
})


clearButton.addEventListener('click', () => {
  resultInput.value = ''
})


evalButton.addEventListener('click', () => {
  const value = resultInput.value
  if (!value) return
  const numbers = value.split('+')

  const intNumbers = numbers
    .map(v => parseInt(v, 8))
    .filter(v => !isNaN(v))
    .map(v => parseInt(v.toString(10), 10))

  const result = intNumbers.reduce((acc, v) => acc + v)

  resultInput.value = parseInt(result.toString(), 10).toString(8)
})

plusButton.addEventListener('click', () => {
  const resultValue = resultInput.value
  if (resultValue && !resultValue.endsWith('+')) {
    resultInput.value += '+'
  }
})
