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
        `),
    images.createImage(`
        . . # . .
        . # # # .
        . # # . #
        . . # . .
        . # . # .
        `),
    images.createImage(`
        . . # . .
        . # # # .
        # . # # .
        . . # . .
        . # . # .
        `),
    images.createImage(`
        . . # . .
        . # # # .
        . # # # .
        . . # . .
        . # . # .
        `),
    images.createImage(`
        . . # . .
        # # # # .
        . . # . #
        . . # . .
        . # . # .
        `),
    images.createImage(`
        . . # . .
        . # # # #
        # . # . .
        . . # . .
        . # . # .
        `),
    images.createImage(`
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        . # . # .
        `),
    images.createImage(`
        . . . . .
        . . . . .
        . . . . .
        # # # # .
        . # . . #
        `),
    images.createImage(`
        . . . . .
        . . . . .
        # # # # .
        . # . . #
        . # . . #
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
    2000,
    16,
    -17,
    -16,
    13,
    14,
    15,
    16,
    17
    ]
    doDance()
})
function doDance () {
    createMoves()
    speed = 1000
    for (let index = 0; index <= dance.length; index++) {
        if (index < dance.length) {
            move = dance[index]
            if (move < 20) {
                if (move >= 0) {
                    moves[0].showImage(0)
                    basic.pause(speed)
                }
                moves[Math.abs(move)].showImage(0)
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
