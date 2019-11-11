maqueen.IR_callbackUser(function ({ myparam: message }) {
    if (message == 42) {
        if (Start_Stop_3 == 0) {
            auto_lichten = 1
            Start_Stop_3 = 1
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        } else if (Start_Stop_3 == 1) {
            auto_lichten = 0
            Start_Stop_3 = 0
        }
    } else if (message == 154) {
        if (Start_Stop == 0) {
            Start_Stop = 1
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
        } else if (Start_Stop == 1) {
            Start_Stop = 0
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        }
    } else if (message == 155) {
        if (Start_Stop_2 == 0) {
            Start_Stop_2 = 1
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        } else if (Start_Stop_2 == 1) {
            Start_Stop_2 = 0
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        }
    } else if (message == 26) {
        snelheid += 50
    } else if (message == 27) {
        snelheid += -50
    } else if (message == 157) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, snelheid)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, snelheid)
        if (auto_lichten == 1) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        }
    } else if (message == 156) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, snelheid)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, snelheid)
        if (auto_lichten == 1) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        }
    } else if (message == 159) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, snelheid)
        if (auto_lichten == 1) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
        }
    } else if (message == 158) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, snelheid)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
        if (auto_lichten == 1) {
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
        }
    } else if (message == 222) {
        maqueen.motorStopAll()
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    } else if (message == 24) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (message == 74) {
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (message == 190) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (message == 83) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (message == 86) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (message == 21) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    } else if (message == 25) {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    } else if (message == 193) {
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (message == 192) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else if (message == 22) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    } else if (message == 63) {
        if (Start_Stop_4 == 0) {
            Start_Stop_4 = 1
            rainbow = 1
            strip.showRainbow(1, 360)
        } else if (Start_Stop_4 == 1) {
            Start_Stop_4 = 0
            rainbow = 0
        }
    }
})
let rainbow = 0
let Start_Stop_4 = 0
let Start_Stop_2 = 0
let Start_Stop = 0
let auto_lichten = 0
let Start_Stop_3 = 0
let strip: neopixel.Strip = null
let snelheid = 0
snelheid = 100
strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    if (rainbow == 1) {
        strip.show()
        strip.rotate(1)
        basic.pause(100)
    }
})
