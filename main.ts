input.onButtonPressed(Button.A, function () {
    accThreshold += 50
    tm.showNumber(accThreshold)
    basic.pause(500)
    tm.showNumber(jumps)
})
input.onButtonPressed(Button.B, function () {
    accThreshold += -50
    tm.showNumber(accThreshold)
    basic.pause(500)
    tm.showNumber(jumps)
})
function reset () {
    jumps = 0
    tm.showNumber(jumps)
}
let acc = 0
let jumps = 0
let accThreshold = 0
let tm: TM1637.TM1637LEDs = null
tm = TM1637.create(
DigitalPin.P0,
DigitalPin.P1,
7,
4
)
accThreshold = 2000
input.onButtonPressed(Button.AB, reset)
reset()
basic.forever(function () {
    acc = input.acceleration(Dimension.Y)
    if (acc > accThreshold) {
        jumps += 1
        tm.showNumber(jumps)
        basic.pause(150)
    }
})
