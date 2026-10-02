// IMAGE FILENAME MAP — matches your actual files exactly
const imageFileNames = {
    Brook: '/BRook.png',
    Bknight: '/BKnight.png',
    Bbishop: '/BBishop.png',
    Bqueen: '/BQueen.png',
    Bking: '/BKing.png',
    Bpawn: '/BPawn.png',
    Wrook: '/Wrook.png',
    Wknight: '/WKnight.png',
    Wbishop: '/WBhishop.png',
    Wqueen: '/WQueen.png',
    Wking: '/WKing.png',
    Wpawn: '/Wpawn.png'
}


// COLORING THE BOARD
function coloring() {
    const columnValues = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 }

    document.querySelectorAll('.box').forEach(box => {
        const id = box.id
        const col = columnValues[id[0]]
        const row = parseInt(id[1])
        const sum = row + col

        if (sum % 2 === 0) {
            box.style.backgroundColor = '#739552'
        } else {
            box.style.backgroundColor = '#EBECD0'
        }
    })
}
coloring()


// INSERTING IMAGES
function insertImage() {
    document.querySelectorAll('.box').forEach(box => {
        const pieceName = box.textContent.trim()

        if (pieceName.length !== 0) {
            const fileName = imageFileNames[pieceName]

            if (pieceName === 'Wpawn' || pieceName === 'Bpawn') {
                box.innerHTML = `${pieceName} <img class="allimg allpawn" src="${fileName}" alt="">`
            } else {
                box.innerHTML = `${pieceName} <img class="allimg" src="${fileName}" alt="">`
            }
            box.style.cursor = 'pointer'
        } else {
            box.innerHTML = ''
            box.style.cursor = 'default'
        }
    })
}
insertImage()


//no chess rules, place anywhere, capture = overwrite
let selectedId = null
let selectedPiece = null

document.querySelectorAll('.box').forEach(box => {
    box.addEventListener('click', function () {

        // nothing selected yet -> select this box if it has a piece
        if (selectedId === null) {
            if (box.textContent.trim().length !== 0) {
                selectedId = box.id
                selectedPiece = box.textContent.trim()
                box.style.outline = '5px solid red'
            }
            return
        }

        // clicking the same box again -> deselect
        if (box.id === selectedId) {
            box.style.outline = 'none'
            selectedId = null
            selectedPiece = null
            return
        }

        // move selected piece here (overwrites whatever was on this square)
        const originBox = document.getElementById(selectedId)
        originBox.style.outline = 'none'
        originBox.textContent = ''

        box.textContent = selectedPiece

        selectedId = null
        selectedPiece = null

        insertImage()
    })
})