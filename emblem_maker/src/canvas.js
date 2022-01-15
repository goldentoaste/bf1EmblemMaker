
import {useEffect, useRef} from 'react';
const print = (item) => {
    console.log(item)
}

const updatesPerSec = 30;
const deltaTime = 1000/updatesPerSec;

//need render should be a useState variable, to be used in for example onclick or onrelease.
const Canvas = ({objects, onClick,onRelease, onMove, onRender, needRendering, props})=> {
    const canvasRef = useRef(null);

    useEffect(() => { //set up during intial render
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        let interval = setInterval(() => {

            if (!needRendering) return; //if no need to render, return.
            onRender();
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (let item of objects) {
                item.draw(context);
            }
        }, deltaTime)
    
        return () => {
            clearInterval(interval); //clean up
        }
    }, [])

    return (
        <canvas ref={canvasRef}
        onClick={onClick}
        onMouseMove={onMove}
        onMouseUp={onRelease}
        onDrag={(event)=>{print(event.button)}}
        {...props}/>
    );
}
export default Canvas;