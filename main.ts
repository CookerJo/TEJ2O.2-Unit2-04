/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Josiah
 * Created on: Feb 2026
 * This program Tell the Temperature.
*/

let temperature: number

//clear screen
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// Temperature 
input.onButtonPressed(Button.A, function () {
    temperature = input.temperature()
    basic.showString("The temperature is: " + temperature + " C")
    pause(1000)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
