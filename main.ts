let moves: Image[] = []
let dance: number[] = []
let move = 0
function createMoves () {
    moves = [
    images.createImage(`
        . # . # .
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        `),
    images.createImage(`
        # . # . .
        # . # . .
        # # # . .
        # . # . .
        # . # . .
        `),
    images.createImage(`
        . . # . #
        . . # . #
        . . # # #
        . . # . #
        . . # . #
        `),
    images.createImage(`
        . # . # .
        . # # # .
        . # . # .
        . # . # .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . # . # .
        . # # # .
        . # . # .
        `),
    images.createImage(`
        . # # # .
        . # . . .
        . # # . .
        . # . . .
        . # . . .
        `),
    images.createImage(`
        # # # . .
        # . . . .
        # # . . .
        # . . . .
        # . . . .
        `),
    images.createImage(`
        . . # # #
        . . # . .
        . . # # .
        . . # . .
        . . # . .
        `),
    images.createImage(`
        . # . . .
        . # # . .
        . # . . .
        . # . . .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # # # .
        . # . . .
        . # # . .
        . # . . .
        `)
    ]
}
input.onButtonPressed(Button.A, function () {
    dance = [
    1,
    2,
    3,
    4,
    6,
    7,
    8,
    9
    ]
    doDance()
})
function doDance () {
    createMoves()
    for (let index = 0; index <= dance.length; index++) {
        if (index < dance.length) {
            move = dance[index]
            if (move < 5) {
                moves[0].showImage(0)
                basic.pause(1000)
            } else {
                moves[5].showImage(0)
                basic.pause(1000)
            }
        }
        moves[move].showImage(0)
        basic.pause(1000)
    }
}
