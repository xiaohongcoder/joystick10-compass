pins.onPulsed(DigitalPin.P16, PulseValue.Low, function () {
    basic.showNumber(input.compassHeading())
})
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
input.calibrateCompass()
