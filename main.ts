function ChaseUpOn () {
    for (let index = 0; index <= 90; index++) {
        strip.setPixelColor(90 - index, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        basic.pause(20)
    }
    basic.pause(200)
}
function ChaseUpOff () {
    for (let index = 0; index <= 90; index++) {
        strip.setPixelColor(90 - index, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(20)
    }
    basic.pause(200)
}
function Sparkle () {
    strip.clear()
    for (let index = 0; index < 170; index++) {
        randomPixel = randint(0, 90)
        strip.setPixelColor(randomPixel, neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(30)
        strip.setPixelColor(randomPixel, neopixel.colors(NeoPixelColors.Black))
    }
}
function chaseOff () {
    for (let index = 0; index <= 90; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(20)
    }
    basic.pause(200)
}
function ChaseOn () {
    for (let index = 0; index <= 90; index++) {
        strip.setPixelColor(index, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        basic.pause(20)
    }
    basic.pause(200)
}
function FillLeftCorner () {
    for (let index = 0; index < 5; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        for (let index = 0; index <= 12; index++) {
            value = 12 - index
            for (let index2 = 0; index2 <= index; index2++) {
                strip.setPixelColor(90 - value, neopixel.colors(NeoPixelColors.Orange))
                value = value + (13 - index2)
            }
            strip.show()
            basic.pause(30)
        }
    }
}
function lines_changing () {
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
    for (let index = 0; index <= 12; index++) {
        startPixel = index * (index + 1) / 2
        for (let index2 = 0; index2 <= index; index2++) {
            strip.setPixelColor(startPixel + index2, neopixel.hsl(index * 21, 100, 50))
            strip.show()
        }
        basic.pause(500)
    }
}
function rainbowChase () {
    strip.showRainbow(1, 360)
    for (let index = 0; index < 455; index++) {
        strip.rotate(1)
        strip.show()
        basic.pause(20)
    }
}
function Triangles () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(500)
    for (let index = 0; index <= 6; index++) {
        startPixel = index + (index + 6) * (index + 7) / 2
        for (let index2 = 0; index2 <= 6 - index; index2++) {
            strip.setPixelColor(startPixel + index2, neopixel.colors(NeoPixelColors.White))
        }
        strip.show()
        basic.pause(500)
    }
    basic.pause(2000)
}
function fillRightCorner () {
    for (let index = 0; index < 5; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        for (let index = 0; index <= 12; index++) {
            value = index
            for (let index2 = 0; index2 <= index; index2++) {
                strip.setPixelColor(90 - value, neopixel.colors(NeoPixelColors.Indigo))
                value = value + (12 - index2)
            }
            strip.show()
            basic.pause(30)
        }
    }
}
let startPixel = 0
let value = 0
let randomPixel = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 91, NeoPixelMode.RGB)
strip.setBrightness(70)
basic.forever(function () {
    strip.showColor(neopixel.rgb(0, 128, 0))
    strip.show()
    basic.pause(2000)
    fillRightCorner()
    FillLeftCorner()
    lines_changing()
    Triangles()
    chaseOff()
    ChaseOn()
    ChaseUpOff()
    ChaseUpOn()
    Sparkle()
    rainbowChase()
})
