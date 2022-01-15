import { useRef, useState } from "react";

import Vector2 from './canvas'
const print = (...item) => {
    console.log(...item)
}
class CanvasController{
    constructor(canvasContext = new CanvasRenderingContext2D()){
        this.objs = [];
        this.currentObj = useRef(null);
        [this.mouseLeft, this.setMouseLeft] = useState(false);
        this.context = canvasContext;

    }

    get mouseLeft(){return this.mouseLeft}
    set mouseLeft(val){this.setMouseLeft(val)}

    onClick(event=new MouseEvent()){

        

        if (event.button === 0){ //0 is code for mouse left
            this.mouseLeft = true;
        }
        
        for(let item of this.objs){//finding if there is a currently selected object
            if(this.context.isPointInPath(item.path, event.x, event.y)){

            }
        }

    }

    onRelease(event=new MouseEvent()){
        if (event.button === 0){
            this.mouseLeft = false;
        }
    }

}

export default CanvasController;