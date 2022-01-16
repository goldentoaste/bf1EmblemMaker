
import {useEffect, useRef} from 'react';

const print = (item) => {
    console.log(item)
}

const updatesPerSec = 60;
const deltaTime = 1000/updatesPerSec;

//need render should be a useState variable, to be used in for example onclick or onrelease.
const Canvas = ({objects, onClick,onRelease, onMove, onRender, needRendering, currentObj, props})=> {
    const canvasRef = useRef(null);

    useEffect(() => { //set up during intial render
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        let interval = setInterval(() => {
            if (!needRendering) return; //if no need to render, return.
            onRender(canvas);
            context.fillStyle="#f5f5f5";
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.lineWidth = 3;
            context.strokeStyle = "#000000";
            context.strokeRect(0, 0, canvas.width, canvas.height);

            for (let item of objects.current) {
                item.draw(context);
            }

            if(currentObj.current){ //if current/selected obj is not null, draw border for it.
                currentObj.current.drawBoundBox(context);
            }
        }, deltaTime)
    
        return () => {
            clearInterval(interval); //clean up
        }
    }, [])

    return (
        <canvas ref={canvasRef}
        onMouseDown={(event)=>{onClick(event, canvasRef.current.getContext('2d'))}}
        onMouseMove={(event)=>{onMove(event, canvasRef.current.getContext('2d'))}}
        onMouseUp={(event)=>{onRelease(event, canvasRef.current.getContext('2d'))}}
        // onDrag={(event)=>{print(event.button)}}
        {...props}/>
    );
}
export default Canvas;