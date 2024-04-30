import SmallBoardHTMLButton from "./SmallBoardHTMLButton.js";
import {checkPlace} from "./Validations.js";


class KeyboardListener {
    activate_Listener(event :KeyboardEvent) {
        const val = +event.key;

        if(val > 0 && val < 10 && SmallBoardHTMLButton.Selected !== null){
            const button_num = document.querySelector(`div[data-button-count="${+SmallBoardHTMLButton.Selected}"]`);

            if(button_num != null){
                let bool = checkPlace(val ,button_num);
                if(bool) {
                    button_num!.innerText = +(val);
                    document.querySelectorAll(`div[data-button-count="${+SmallBoardHTMLButton.Selected}"]`)[0].classList.remove("selected");
                    !SmallBoardHTMLButton.Selected = null;

                }
            }
        }
    }

}

export default KeyboardListener;