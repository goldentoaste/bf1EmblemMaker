import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import CanvasController from './canvasController';
import { CanvasObj } from './canvasObj';
import Canvas from './canvas';



const print = (...item) => {
    console.log(...item)
}



let controller;
let stuff = [ // implement change layers
    new CanvasObj(50, 50, 325, 325, "M0 0 L325 0 L325 325 L0 325 Z", "AAAA", false, false, 0, "#aadaff", 1),
    new CanvasObj(200, 100, 325, 325, "M0 0 L325 0 L325 325 L0 325 Z", "BBBB", false, false, 0, "#dddddd", 1),

];

// Mouse X and Y

function App() {
    let currentObj = useRef(null);
    let objRef = useRef(stuff);





    //todo test rotation, implement transparency,width, height, flip X&Y and also mouse Drag.
    useEffect(() => {
        print("setting up in useEffect.");
        controller = new CanvasController(objRef, currentObj);
    }, [])

    return (
        <body>
            <div>
                <div className="container">
                    <div className="Canvas">
                        {/* <p><strong>Canvas</strong></p> */}
                        <div className='CV'>
                            <Canvas objects={objRef}
                                onClick={(evt, ctx) => { controller.onClick(evt, ctx) }}
                                onRelease={(evt, ctx) => { controller.onRelease(evt, ctx) }}
                                onMove={(evt, ctx) => { controller.onMove(evt, ctx) }}
                                onRender={() => { }}
                                needRendering={true}
                                currentObj={currentObj}
                                props={{
                                    width: 800,
                                    height: 800
                                }}
                            />
                        </div>
                    </div>
                    <div class="Position">
                        <p>X Val: </p>
                        
                        <p>Y Val: Lorem Empsum</p> <br></br>
                        <p>Height: Lorem Empsum</p>
                        <p>Width: Lorem Empsum</p> <br></br>
                        <p>Angle: Lorem Empsum</p>
                        <p>Opacity: Lorem Empsum</p>
                    </div>

                                    {/* List */}
                
                    <div class="List">
                            <div id='layer1'>
                                <p>Layer 1</p>
                            </div>

                            <div id='layer2'>
                                <p>Layer 2</p>
                            </div>
                                <p>Layer 3</p>

                            <div id='layer3'>
                                
                            </div>
                    </div>







                    <div class="Shapes">
                        <p>Shapes</p>

                        <ButtonGroup className="sm">
                            <Button >SVG Shape 1</Button>
                            <Button >SVG Shape 2</Button>
                            <Button >SVG Shape 3</Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default App; 