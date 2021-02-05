def on_button_pressed_a():
    global accThreshold
    accThreshold += 50
    tm.show_number(accThreshold)
    basic.pause(100)
    tm.show_number(jumps)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global accThreshold
    accThreshold += -50
    tm.show_number(accThreshold)
    basic.pause(100)
    tm.show_number(jumps)
input.on_button_pressed(Button.B, on_button_pressed_b)

def reset():
    global jumps, tm
    jumps = 0
    tm = TM1637.create(DigitalPin.P0, DigitalPin.P1, 7, 4)
acc = 0
jumps = 0
tm: TM1637.TM1637LEDs = None
accThreshold = 2000
input.on_button_pressed(Button.AB, reset)
reset()

def on_forever():
    global acc, jumps
    acc = input.acceleration(Dimension.Y)
    if acc > accThreshold:
        jumps += 1
        tm.show_number(jumps)
        basic.pause(150)
basic.forever(on_forever)
