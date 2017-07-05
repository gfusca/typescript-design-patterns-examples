import NintendoJoystick from "./nintendo";

function doKonamiCode(joystick) {
    console.log("Konami Code time!")
    const actions = [ "up", "up", "down", "down", "left", "right", "left", "right", "B", "A"];
    actions.map( (a) => joystick.doAction(a));
    console.log("Unlocked all levels!");
}

const joystick = new NintendoJoystick();
doKonamiCode(joystick);

