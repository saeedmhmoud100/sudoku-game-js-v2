import {checkPlace} from "./Validations.js";

class SmallBoardHTMLButton {
    button: HTMLDivElement;
    public board_id: number;

    public static button_count: number;

    public static Selected: number;
    constructor(board_id:number, button_id:number){
        this.board_id = board_id;
        this.button = this.CreateButton(button_id);
    }

    private CreateButton(button_id:number): HTMLDivElement {
        const boardItem: HTMLDivElement = document.createElement("div");
        boardItem.classList.add("board-unit");
        boardItem.classList.add("board-button");

        boardItem.setAttribute('data-board', this.board_id.toString());
        boardItem.setAttribute('data-button', button_id.toString());
        boardItem.id = "button-" + this.board_id.toString() + "-" + button_id.toString()
        boardItem.setAttribute("data-button-count", SmallBoardHTMLButton.button_count.toString());
        boardItem.addEventListener("click", this.handleButtonClick);
        SmallBoardHTMLButton.button_count++;



        return boardItem;
    }

    handleButtonClick(event: Event): void {
        if(this.innerText == ''){
            SmallBoardHTMLButton.Selected = +this.getAttribute("data-button-count")!;
            document!.querySelectorAll(".board-button").forEach((button: HTMLElement) => {
                button.classList.remove("selected");
            })
                this.classList.add("selected");
        }
    }


    public getButton(): HTMLDivElement {
        return this.button;
    }
}

SmallBoardHTMLButton.button_count = 0;
SmallBoardHTMLButton.Selected = -1;
export default SmallBoardHTMLButton;