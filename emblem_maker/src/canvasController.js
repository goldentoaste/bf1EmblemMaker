import { useRef, useState } from "react";

import Vector2 from './canvas'
const print = (...item) => {
    console.log(...item);
}
class CanvasController{
    constructor(items, curObjRef, mouseLeftState){
        this.objs = items;
        this.currentObj = curObjRef;
        [this.left, this.setLeft] = mouseLeftState;   

    }



    onClick(event=new MouseEvent(), context = new CanvasRenderingContext2D()){
        let targetBox = event.target.getBoundingClientRect();
        print(event.pageX - targetBox.left, event.pageY-targetBox.top);
        if (event.button === 0){ //0 is code for mouse left
            this.setLeft(true);
        }
        this.currentObj.current = null; //set the initial val to null so that if no obj is under mouse.
        for(let item of this.objs){//finding if there is a currently selected object
            if(context.isPointInPath(item.path, event.pageX - targetBox.left - item.x, event.pageY-targetBox.top - item.y))
            {
                this.currentObj.current = item;
            }
        }
        print(this.currentObj.current);


    }

    onRelease(event=new MouseEvent(), context = new CanvasRenderingContext2D()){
        if (event.button === 0){
            this.setLeft(false);
        }
    }

    onMove(event=new MouseEvent(), context = new CanvasRenderingContext2D()){
        
    }

}

export default CanvasController;