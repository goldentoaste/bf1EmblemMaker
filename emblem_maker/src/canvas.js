

const print = (item) => {
    console.log(item)
}

const updatesPerSec = 30;
const deltaTime = 1000/30;
const Canvas = ({objects, onClick, onMove, onRender, needRendering, props})=> {

    const canvasRef = useRef(null);

    useEffect(() => { //set up during intial render
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");

        let interval = setInterval(() => {
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
        onDrag={(event)=>{print(event.button)}}
        {...props}/>
    );
}