const tileDisplay = document.querySelector('.tile-container');
const keyboard = document.querySelector('.keyboard-container');

const keys = [
    'Q', 'W', 'E','R','T','Y','T', 'Y', 'U', 'I', 'O', 'P', 'Ğ', 'Ü', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ş', 'İ',  'Z', 'X', 'C', 'V','ENT', 'B', 'N', 'M', 'Ö', 'Ç', 'DEL'
]
const guessRows = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
]
guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
    guessRow.forEach((guess, guessIndex) => {
    const tileElement = document.createElement('div')
    tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
    tileElement.classList.add('tile')
    rowElement.append(tileElement)
    })
    tileDisplay.append(rowElement)
})

const handleClick = () => {
    console.log('clicked')
}

keys.forEach(key=> {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click', handleClick)
    keyboard.append(buttonElement)
})