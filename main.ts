let moves: Image[] = []
let dance: number[] = []
let speed = 0
let move = 0
function createMoves () {
    moves = [
    images.createImage(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . # . # .
        `),
    images.createImage(`
        # . # . .
        . # # # .
        . . # . #
        . . # . .
        . # . # .
        `),
    images.createImage(`
        . . # . #
        . # # # .
        # . # . .
        . . # . .
        . # . # .
        `),
    images.createImage(`
        # . # . #
        . # # # .
        . . # . .
        . . # . .
        . # . # .
        `),
    images.createImage(`
        . # . . .
        # # # . .
        . # . # .
        . # . . .
        # . # . .
        `),
    images.createImage(`
        . . . # .
        . . # # #
        . # . # .
        . . . # .
        . . # . #
        `),
    images.createImage(`
        . # # # .
        # . # . #
        . . # . .
        . # . # .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        `),
    images.createImage(`
        # . # # .
        . # . . .
        # . # . .
        # . . # #
        . . . # .
        `),
    images.createImage(`
        . # # . #
        . . . # .
        . . # . #
        # # . . #
        . # . . .
        `)
    ]
}
function doStartup () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . # . # .
        `)
    basic.pause(2000)
    basic.clearScreen()
    basic.pause(1000)
}
input.onButtonPressed(Button.A, function () {
    doStartup()
    dance = [
    200,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
    ]
    doDance()
})
function doDance () {
    createMoves()
    speed = 1000
    for (let index = 0; index <= dance.length; index++) {
        if (index < dance.length) {
            move = dance[index]
            if (move < 10) {
                moves[0].showImage(0)
                basic.pause(speed)
                moves[move].showImage(0)
                basic.pause(speed)
            } else {
                speed = move
            }
        }
    }
    moves[0].showImage(0)
    basic.pause(1000)
    basic.clearScreen()
}
