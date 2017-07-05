import {Button, Joystick} from "./command";

export default class NintendoJoystick extends Joystick {

    constructor() {
        super();
        this.buttons = {
            A: new NintendoAButton(),
            B: new NintendoBButton(),
            up: new NintendoUpButton(),
            down: new NintendoDownButton(),
            left: new NintendoLeftButton(),
            right: new NintendoRightButton(),
        };
    }

}

class NintendoAButton extends Button {
    execute() {
        console.log("A pressed");
    }
}
class NintendoBButton extends Button {
    execute() {
        console.log("B pressed");
    }
}

class NintendoUpButton extends Button {
    execute() {
        console.log("up pressed");
    }
}
class NintendoDownButton extends Button {
    execute() {
        console.log("down pressed");
    }
}
class NintendoLeftButton extends Button {
    execute() {
        console.log("left pressed");
    }
}

class NintendoRightButton extends Button {
    execute() {
        console.log("right pressed");
    }
}