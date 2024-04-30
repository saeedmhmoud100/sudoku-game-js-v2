import BigBoard from "./BigBoard.js";
import KeyboardListener from "./KeyboardListener.js";
import AutoFillBoard from "./AutoFillBoard.js";
window.onload =function () {
    const board = new BigBoard();
    const keyListener = new KeyboardListener();
    const autoFill = new AutoFillBoard();
    board.displayBoard("main-board");
    document.addEventListener('keyup', keyListener.activate_Listener)
    setTimeout(() => {

        for (let i = 0; i < 9; i++) {
            autoFill.fill(i);

        }

    },1000)


}