import BigBoard from "./BigBoard.js";
import KeyboardListener from "./KeyboardListener.js";
import AutoFillBoard from "./AutoFillBoard.js";
window.onload = function () {
    const board = new BigBoard();
    const keyListener = new KeyboardListener();
    const autoFill = new AutoFillBoard();
    board.displayBoard("main-board");
    document.addEventListener('keyup', keyListener.activate_Listener);
    autoFill.fill();
};
