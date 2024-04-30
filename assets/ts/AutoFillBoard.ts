import {checkPlace} from "./Validations.js";

class AutoFillBoard{

    fill(i=0){
        for (i; i < 9; i++) {
            const times: number = 2+ Math.floor(Math.random() * 4) ;
            const board = document.getElementById('board-' + i);

            for (let j = 0; j < times; j++) {

                const buttons = board!.childNodes;
                let random_button = Math.floor(Math.random() * 9) ;

                let random_value = Math.floor(Math.random() * 9) +1;
                let bool: boolean = ((<HTMLElement>buttons[random_button]).innerText != '' || !checkPlace(random_value.toString(), buttons[random_button] as HTMLElement,false));
                if(!bool && (<HTMLElement>buttons[random_button])){
                    (<HTMLElement>buttons[random_button]).innerText = random_value.toString();
                }else
                    j--;
            }
        }
    }
}

export default AutoFillBoard;