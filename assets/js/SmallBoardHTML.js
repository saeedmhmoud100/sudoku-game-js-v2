import SmallBoardHTMLButton from "./SmallBoardHTMLButton.js";
class SmallBoardHTML {
    constructor() {
        this.id = SmallBoardHTML.board_id;
        SmallBoardHTML.board_id++;
        this.buttons = [];
        this.create_buttons();
    }
    create_buttons() {
        for (let i = 0; i < 9; i++) {
            this.buttons[i] = new SmallBoardHTMLButton(this.id, i);
        }
    }
    reset_buttons() {
        this.buttons = [];
        this.create_buttons();
    }
    reset_board() {
        this.reset_buttons();
    }
    get_board() {
        const board = document.createElement("div");
        board.classList.add("board");
        board.id = 'board-' + this.id.toString();
        this.buttons.forEach((button) => board.appendChild(button.getButton()));
        return board;
    }
}
SmallBoardHTML.board_id = 0;
export default SmallBoardHTML;
