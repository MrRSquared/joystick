radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendString("e")
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendString("f")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendString("d")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendString("c")
})
joystickbit.initJoystickBit()
radio.setGroup(1)
basic.forever(function () {
    radio.sendValue("X", joystickbit.getRockerValue(joystickbit.rockerType.X))
    radio.sendValue("Y", joystickbit.getRockerValue(joystickbit.rockerType.Y))
})
