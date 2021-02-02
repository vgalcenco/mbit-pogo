function init () {
    jumps = -1
    basic.clearScreen()
}
let acc = 0
let jumps = 0
init()
input.onButtonPressed(Button.A, init)
basic.forever(function () {
    acc = input.acceleration(Dimension.Y)
    if (acc > 2000) {
        jumps += 1
        led.plot(jumps % 5, jumps / 5)
        basic.pause(50)
    }
})
