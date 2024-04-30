import SmallBoardHTMLButton from "./SmallBoardHTMLButton.js";

class SmallBoardHTML {
    buttons: SmallBoardHTMLButton[];
    static board_id: number;
    id: number;

    constructor() {
        this.id = SmallBoardHTML.board_id;
        SmallBoardHTML.board_id++;

        this.buttons = [];
        this.create_buttons();
    }

    create_buttons(): void {
        for (let i = 0; i < 9; i++) {
            this.buttons[i] = new SmallBoardHTMLButton(this.id, i);
        }
    }

    public reset_buttons(): void {
        this.buttons = [];
        this.create_buttons();
    }

    public reset_board(): void {
        this.reset_buttons();
    }



    public get_board(): HTMLDivElement {
        const board: HTMLDivElement = document.createElement("div");
        board.classList.add("board");
        board.id = 'board-'+this.id.toString();
        this.buttons.forEach((button) => board.appendChild(button.getButton()));
        return board;
    }

}

SmallBoardHTML.board_id = 0;
export default SmallBoardHTML;