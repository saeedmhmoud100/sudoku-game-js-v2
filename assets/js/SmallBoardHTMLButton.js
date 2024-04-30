class SmallBoardHTMLButton {
    constructor(board_id, button_id) {
        this.board_id = board_id;
        this.button = this.CreateButton(button_id);
    }
    CreateButton(button_id) {
        const boardItem = document.createElement("div");
        boardItem.classList.add("board-unit");
        boardItem.classList.add("board-button");
        boardItem.setAttribute('data-board', this.board_id.toString());
        boardItem.setAttribute('data-button', button_id.toString());
        boardItem.id = "button-" + this.board_id.toString() + "-" + button_id.toString();
        boardItem.setAttribute("data-button-count", SmallBoardHTMLButton.button_count.toString());
        boardItem.addEventListener("click", this.handleButtonClick);
        SmallBoardHTMLButton.button_count++;
        return boardItem;
    }
    handleButtonClick(event) {
        if (this.innerText == '') {
            SmallBoardHTMLButton.Selected = +this.getAttribute("data-button-count");
            document.querySelectorAll(".board-button").forEach((button) => {
                button.classList.remove("selected");
            });
            this.classList.add("selected");
        }
    }
    getButton() {
        return this.button;
    }
}
SmallBoardHTMLButton.button_count = 0;
SmallBoardHTMLButton.Selected = -1;
export default SmallBoardHTMLButton;
