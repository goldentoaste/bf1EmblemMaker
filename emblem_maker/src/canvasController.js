import { useRef, useState } from "react";

import {Vector2} from './canvasObj'
const print = (...item) => {
    console.log(...item);
}
class CanvasController {
    constructor(itemsRef, curObjRef) {
        this.objs = itemsRef;
        this.currentObj = curObjRef;
        this.left = false;

        this.lastPos = Vector2.zero;
        //this.offset = Vector2.zero;

    }



    onClick(event = new MouseEvent(), context = new CanvasRenderingContext2D()) {
        print("page:", event.pageX, event.pageY, "client:", event.clientX, event.clientY);
        print( event.target.getBoundingClientRect(), event.target)
        let targetBox = event.target.getBoundingClientRect();
        if (event.button === 0) { //0 is code for mouse left
            this.left = true;
            this.lastPos = new Vector2(event.screenX, event.screenY);
        }
        this.currentObj.current = null; //set the initial val to null so that if no obj is under mouse.
        for (let item of this.objs.current) {//finding if there is a currently selected object

            let transformedPos = new Vector2(event.pageX - targetBox.left - window.scrollX, event.pageY - targetBox.top - window.scrollY);//convert page coord into canvas coord
            let center = item.center;
            context.translate(center.x, center.y);
            context.rotate(item.angle);
            context.scale(item.ScaleX, item.ScaleY);
            context.translate(...item.size.mul(-0.5).toArray());

            if (context.isPointInPath(item.path, transformedPos.x, transformedPos.y)) {
                this.currentObj.current = item;
                //this.offset = (new Vector2(event.pageX - targetBox.left, event.pageY-targetBox.top)).add(item.position.mul(-1));
            }
            context.setTransform(1, 0, 0, 1, 0, 0);
        }

    }

    onRelease(event = new MouseEvent(), context = new CanvasRenderingContext2D()) {
    
        if (event.button === 0) {
            this.left = false;
        }
    }

    onMove(event = new MouseEvent(), context = new CanvasRenderingContext2D()) {
   
        if (this.left && this.currentObj.current) {
            let delta = new Vector2(event.screenX, event.screenY).add(this.lastPos.mul(-1));
            this.currentObj.current.position = this.currentObj.current.position.add(delta);
            this.lastPos = new Vector2(event.screenX, event.screenY);   
        }

    }

}

export default CanvasController;