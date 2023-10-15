const tileDisplay = document.querySelector('.tile-container');
const keyboard = document.querySelector('.keyboard-container');
const messageDisplay = document.querySelector('.message-section');
const wordle = "UBERS";

const keys = [
    'E','R','T','Y','T', 'Y', 'U', 'I', 'O', 'P', 'Ğ', 'Ü', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ş', 'İ',  'Z', 'C', 'V', 'B', 'N', 'M', 'Ö', 'Ç','ENT', '⌫'
]
const guessRows = [
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']
]

let currentRow = 0
let currentTile = 0

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



keys.forEach(key=> {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click', ()=> handleClick(key))
    keyboard.append(buttonElement)
})

const handleClick = (letter) => {
    console.log('clicked', letter)
    if (letter === '⌫'){
        deleteLetter()
        console.log('guessRows', guessRows)
        return
    }
    if (letter === 'ENT'){
        checkRow()
        console.log('guessRows', guessRows)
        return
    }
    addLetter(letter)
}

const addLetter = (letter) => {
    if (currentTile < 5 && currentRow < 6) {
        const tile = document.getElementById('guessRow-'+ currentRow + '-tile-' + currentTile)
        tile.textContent = letter
        guessRows[currentRow][currentTile] = letter /* ??? */
        tile.setAttribute('data', letter)
        currentTile++
        console.log('guessRows', guessRows)
    }
} /**Bu kısımda anlamadığım yerler var */

const deleteLetter = () => {
    if (currentTile > 0) {
        currentTile-- /**??? */
    const tile = document.getElementById('guessRow-'+ currentRow + '-tile-' + currentTile)
    tile.textContent = ''
    guessRows[currentRow][currentTile] = ''
    tile.setAttribute('data', '')
    }
    
}

const checkRow = () => {
    const guess = guessRows[currentRow].join('')
    if(currentTile === 5){
        console.log('guess is ' + guess, 'wordle is ' + wordle)
        if(wordle == guess){
            showMessage('Harikasın!! Doğru Kelimeyi Bildin')
        }
    }
}

const showMessage = (message) => {
    const messageElement = document.createElement('p') /**html içinde p etiketi oluşturması için */
    messageElement.textContent = message
    messageDisplay.append(messageElement)
}