const tileDisplay = document.querySelector('.tile-container');
const keyboard = document.querySelector('.keyboard-container');
const messageDisplay = document.querySelector('.message-section');
const wordle = 'MISIR'

const keys = [
    'E','R','T','Y','T', 'Y', 'U', 'I', 'O', 'P', 'Ğ', 'Ü', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ş', 'İ',  'Z', 'C', 'V', 'B', 'N', 'M', 'Ö', 'Ç','ONAY', '⌫'
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
let isGameOver = false

for (let guessRowIndex = 0; guessRowIndex < guessRows.length; guessRowIndex++) {
    const rowElement = document.createElement('div');
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex);
    for (let guessIndex = 0; guessIndex < guessRows[guessRowIndex].length; guessIndex++) {
        const tileElement = document.createElement('div');
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex);
        tileElement.classList.add('tile');
        rowElement.append(tileElement);
    }
    tileDisplay.append(rowElement);
}



keys.forEach(key=> {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click', ()=> handleClick(key))
    keyboard.append(buttonElement)
})

function handleClick(letter) {
    console.log('clicked', letter);
    if (letter === '⌫') {
        deleteLetter();
        console.log('guessRows', guessRows);
        return;
    }
    if (letter === 'ONAY') {
        checkRow();
        console.log('guessRows', guessRows);
        return;
    }
    addLetter(letter);
}
function addLetter(letter) {
    if (currentTile < 5 && currentRow < 6) {
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile);
        tile.textContent = letter;
        guessRows[currentRow][currentTile] = letter;
        tile.setAttribute('data', letter);
        currentTile++;
        console.log('guessRows', guessRows);
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
    if(currentTile > 4 ){
        console.log('guess is ' + guess, 'wordle is ' + wordle)
        if(wordle == guess){
            showMessage('Tebrikler! Doğru Kelimeyi Bildin :))')
            isGameOver = true
            return
        } else{
            if(currentRow >= 5){
                isGameOver=false
                showMessage('Maalesef Oyun Bitti, tekrar dene :(')
                return
            }
            if(currentRow < 5) {
                currentRow++
                currentTile = 0
            }
        }
    }
}

const showMessage = (message) => {
    const messageElement = document.createElement('p') /**html içinde p etiketi oluşturması için */
    messageElement.textContent = message
    messageDisplay.append(messageElement)
    setTimeout(()=> messageDisplay.removeChild(messageElement),2000)
}