import React, { useEffect, useRef, useState } from 'react';
import './App.css';

import Canvas from './canvas';
import { CanvasObj } from './canvasObj';
import CanvasController from './canvasController';

import svgs from './svgsVals'


const print = (...item) => {
    console.log(...item)
}


let controller;
let stuff = [
    new CanvasObj(50, 50, 325, 325, "M0 0 L325 0 L325 325 L0 325 Z", "AAAA", false, false, 0, "#aadaff", 1),
    new CanvasObj(200, 100, 325, 325, "M0 0 L325 0 L325 325 L0 325 Z", "BBBB", false, false, 0, "#dddddd", 1),
];

function App() {
    let currentObj = useRef(null);
    let objRef = useRef(stuff);
    //todo test rotation, implement transparency,width, height, flip X&Y and also mouse Drag.
    useEffect(() => {
        print("setting up in useEffect.");
        controller = new CanvasController(objRef, currentObj);
    }, [])

    return (
        <div className='canvasContainer'>
            <h1>Hello</h1>
            <Canvas objects={objRef}
                onClick={(evt, ctx) => { controller.onClick(evt, ctx) }}
                onRelease={(evt, ctx) => { controller.onRelease(evt, ctx) }}
                onMove={(evt, ctx) => { controller.onMove(evt, ctx) }}
                onRender={() => { }}
                needRendering={true}
                currentObj={currentObj}
                props={{
                    width: 1000,
                    height: 1000
                }}
            />
        </div>
    )


    // return (

    // <body>
    //     <div className='main'>

    //         <div className='canvas'>

    //             <p>Placeholder for canvas</p> 

    //         </div>
    //         <div className='position'>

    //             <div className='border rounded m-3 p-5 shadow bg-warning'>
    //                 <p>X Position and Y Position</p>
    //             </div>
    //             <div className='border rounded m-3 p-5 shadow bg-warning'>
    //                 <p>Height and Width</p>
    //             </div>
    //             <div className='width'>

    //             </div>

    //         </div>


    //         <div className='shapes'>
    //             <p>Placeholder for shapes</p>

    //         </div>

    //         <div className='list'>
    //             <p>Placeholder for list</p>

    //         </div>




    //     </div>



    // </body>

    // )
}
export default App;