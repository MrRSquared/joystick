radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendString("e")
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendString("f")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.onReceivedValue(function (name, value) {
    if (name == "mode") {
        basic.showNumber(value)
    } else if (name == "vibrate") {
        joystickbit.Vibration_Motor(value)
    }
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
    radio.sendValue("xAxis", Oscats.convert(joystickbit.getRockerValue(joystickbit.rockerType.X)))
    radio.sendValue("yAxis", Oscats.convert(joystickbit.getRockerValue(joystickbit.rockerType.Y)))
})
