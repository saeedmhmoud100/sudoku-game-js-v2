"use strict";
class KeyboardListener {
    constructor() {
        this.enter = 13;
    }
    isEnter(event) {
        return event.keyCode === this.enter;
    }
}
