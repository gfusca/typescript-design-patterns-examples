interface Command {
    execute();
}

export abstract class Joystick {
    buttons: {}

    doAction(action: string) {
        this.buttons[action].execute();
    }
}

export abstract class Button implements Command {
    abstract execute();
}




