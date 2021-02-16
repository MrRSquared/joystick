// Add your code here
let mode = 0;
input.onButtonPressed(Button.A, function () {//Trigger Tele
    if (mode == 0){
        mode = 1;
    } else {
        mode =0;
    }
    radio.sendValue("mode", mode)  
})
input.onButtonPressed(Button.B, function () {//Trigger Auto
    if (mode ==0){
        mode = 2;
    } else {
        mode =0;
    }

    radio.sendValue("mode", mode)  
})
/** * Custom blocks */ //% weight=100 color=#d42926 icon="\uf1b0"
namespace OscatsJoystick{
    //% block
    export function getMode(){
        return mode;
    }
    //% block = "Convert %input %scale"
    //% weight = 96
    export function convert(input:number ){
        let convertedNumber = 0
        convertedNumber = ((input-(0))/1024)*-1;
        return convertedNumber;
    }

}