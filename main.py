def ChaseUpOn():
    for index in range(91):
        strip.set_pixel_color(90 - index, neopixel.colors(NeoPixelColors.BLUE))
        strip.show()
        basic.pause(20)
    basic.pause(200)
def ChaseUpOff():
    for index2 in range(91):
        strip.set_pixel_color(90 - index2, neopixel.colors(NeoPixelColors.BLACK))
        strip.show()
        basic.pause(20)
    basic.pause(200)
def Sparkle():
    global randomPixel
    strip.clear()
    for index3 in range(170):
        randomPixel = randint(0, 90)
        strip.set_pixel_color(randomPixel, neopixel.colors(NeoPixelColors.WHITE))
        strip.show()
        basic.pause(30)
        strip.set_pixel_color(randomPixel, neopixel.colors(NeoPixelColors.BLACK))
def chaseOff():
    for index4 in range(91):
        strip.set_pixel_color(index4, neopixel.colors(NeoPixelColors.BLACK))
        strip.show()
        basic.pause(20)
    basic.pause(200)
def ChaseOn():
    for index5 in range(91):
        strip.set_pixel_color(index5, neopixel.colors(NeoPixelColors.RED))
        strip.show()
        basic.pause(20)
    basic.pause(200)
def FillLeftCorner():
    global value
    for index6 in range(5):
        strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        for index7 in range(13):
            value = 12 - index7
            index22 = 0
            while index22 <= index7:
                strip.set_pixel_color(90 - value, neopixel.colors(NeoPixelColors.ORANGE))
                value = value + (13 - index22)
                index22 += 1
            strip.show()
            basic.pause(30)
def lines_changing():
    global startPixel
    strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
    basic.pause(500)
    for index8 in range(13):
        startPixel = (index8 + 0) * (index8 + 1) / 2
        index23 = 0
        while index23 <= index8:
            strip.set_pixel_color(startPixel - 0 + index23, neopixel.hsl(index8 * 21, 100, 50))
            strip.show()
            index23 += 1
        basic.pause(500)
def rainbowChase():
    strip.show_rainbow(1, 360)
    for index9 in range(455):
        strip.rotate(1)
        strip.show()
        basic.pause(20)
def Triangles():
    global startPixel
    strip.show_color(neopixel.colors(NeoPixelColors.RED))
    basic.pause(500)
    for index10 in range(7):
        startPixel = index10 + (index10 + 6) * (index10 + 7) / 2
        index24 = 0
        while index24 <= 6 - index10:
            strip.set_pixel_color(startPixel + index24, neopixel.colors(NeoPixelColors.WHITE))
            index24 += 1
        strip.show()
        basic.pause(500)
    basic.pause(2000)
def fillRightCorner():
    global value
    for index11 in range(5):
        strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        for index12 in range(13):
            value = index12
            index25 = 0
            while index25 <= index12:
                strip.set_pixel_color(90 - value, neopixel.colors(NeoPixelColors.INDIGO))
                value = value + (12 - index25)
                index25 += 1
            strip.show()
            basic.pause(30)
startPixel = 0
value = 0
randomPixel = 0
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P1, 91, NeoPixelMode.RGB)
strip.set_brightness(70)

def on_forever():
    strip.show_color(neopixel.rgb(0, 128, 0))
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
basic.forever(on_forever)
