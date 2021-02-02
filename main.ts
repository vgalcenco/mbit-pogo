function reset () {
    jumps = -1
    basic.clearScreen()
}
let acc = 0
let jumps = 0
input.onButtonPressed(Button.A, reset)
reset()
basic.forever(function () {
    acc = input.acceleration(Dimension.Y)
    if (acc > 1500) {
        jumps += 1
        led.plot(jumps % 5, jumps / 5)
        basic.pause(80)
    }
})
