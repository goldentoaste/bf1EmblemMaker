import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from 'react-bootstrap/Stack';
import CanvasController from './canvasController';

import { CanvasObj, Vector2 } from './canvasObj';
import Canvas from './canvas';
import Form from 'react-bootstrap/Form'
import Image from 'react-bootstrap/Image'

import {svgs, SvgContainer} from './svgsVals'
const print = (...item) => {
    console.log(...item)
}



let controller;
let stuff = [
    new CanvasObj(50, 50, 325, 325, "M0 0 L325 0 L325 325 L0 325 Z", "AAAA", false, false, 0, "#aadaff", 1),
    // new CanvasObj(200, 100, 325, 325, "M0 0 L325 0 L325 325 L0 325 Z", "BBBB", false, false, 0, "#dddddd", 1),
];

// Mouse X and Y

function App() {
    let currentObj = useRef(null);
    let objRef = useRef(stuff);


    //todo test rotation, implement transparency,width, height, flip X&Y and also mouse Drag.
    useEffect(() => {

        controller = new CanvasController(objRef, currentObj);
    }, [])


    let [X, setX] = useState(0);
    let [Y, setY] = useState(0);
    let [W, setW] = useState(0);
    let [H, setH] = useState(0);
    let [angle, setAngle] = useState(0);
    let [opacity, setOpacity] = useState(0);
    let [color, setColor] = useState("#000000");

    const updateStats = () => {
        let obj = currentObj.current;
        if (obj && controller.left) { //only update if there is a current obj selected.
            setX(obj.x);
            setY(obj.y);
            setW(obj.width);
            setH(obj.height);
            setAngle(Vector2.r2d(obj.angle));
            setOpacity(obj.opacity);
            setColor(obj.color);
        }
    }

    let iconButtons = []

    const maxIconSize = 100;

    for (let key of Object.keys(svgs )){
        let item = svgs[key];
        let max =maxIconSize/ Math.max(item.width, item.height);
        iconButtons.push(
            <Button 
            onClick={(event)=>{
                objRef.current.push(new CanvasObj(100, 100, item.width, item.height,
                    item.path, key, false, false, 0, '#34dd55', 1
                    ));
            }}>
                <img src={item.src}
                width={item.width * max}
                height={item.height * max}
                />
            </Button>
        );
    }

    return (
        
        <body>
               




            <div>
                 
                <div class="container">
                      
                    <div class="Canvas">
                        {/* <p><strong>Canvas</strong></p> */}
                        <div class='CV'>
                            <Canvas objects={objRef}
                                onClick={(evt, ctx) => { controller.onClick(evt, ctx) }}
                                onRelease={(evt, ctx) => { controller.onRelease(evt, ctx) }}
                                onMove={(evt, ctx) => { controller.onMove(evt, ctx) }}
                                onRender={() => { updateStats(); }}
                                needRendering={true}
                                currentObj={currentObj}
                                props={{
                                    width: 800,
                                    height: 805
                                }}
                            />
                        </div>
                    </div>
                    <div class="InfoGroup">
                        <div class="posGroup">
                             <label ><font> <strong>X: </strong></font></label>
                            <input type={"number"} class="form-control" id="XVal"
                                value={X}
                                onChange={(e) => {
                                    if (currentObj.current) {
                                        currentObj.current.x = parseFloat(e.target.value);
                                        setX(parseFloat(e.target.value));
                                    }
                                }}
                            />

                                <label ><font> <strong>Y: </strong></font></label>
                            <input type={"number"} class="form-control" id="YVal" value={Y}
                                onChange={(e) => {
                                    if (currentObj.current) {
                                        currentObj.current.y = parseFloat(e.target.value);
                                        setY(parseFloat(e.target.value));
                                    }
                                }
                                } />
                        </div>

                        <div class="sizeGroup">
                        <label ><font> <strong>W: </strong></font></label>                          
                          <input type={"number"} class="form-control" id="WVal" value={W}

                                onChange={(e) => {
                                    if (currentObj.current) {
                                        currentObj.current.width = parseFloat(e.target.value);
                                        setW(parseFloat(e.target.value));
                                    }
                                }
                                } />

                                <label ><font> <strong>H: </strong></font></label>
                            <input type={"number"} class="form-control" id="HVal" value={H}
                                onChange={(e) => {
                                    if (currentObj.current) {
                                        currentObj.current.height = parseFloat(e.target.value);
                                        setH(parseFloat(e.target.value));
                                    }
                                }
                                } />
                        </div>

                        <div className='angle'>
                        <label ><font> <strong>Angle: </strong></font></label>
                            <input type={"number"} class="form-control" id="AngleVal" value={angle}
                                onChange={(e) => {
                                    if (currentObj.current) {
                                        currentObj.current.angle = parseFloat(Vector2.d2r(e.target.value));
                                        setAngle(parseFloat(e.target.value));
                                    }
                                }
                                } />
                        </div>

                        <div className='opacitydiv'>
                            <label className='text3' > <strong>
                                    Opacity: 
                                </strong></label>
                            <input type={"number"} class="form-control" id="OpacityVal" value={opacity}

                                onChange={(e) => {
                                    if (currentObj.current) {
                                        currentObj.current.opacity = Math.min(1, Math.max(0, parseFloat(e.target.value)));
                                        setOpacity(parseFloat(e.target.value))
                                    }
                                }
                                } />
                        </div>

                        <div className='color'>
                        <label ><font> <strong>Color: </strong></font></label>
                            <input type={"color"} class="form-control" id="ColorVal" value={color}
                                onChange={(e) => {
                                    if (currentObj.current) {
                                        currentObj.current.color = e.target.value;
                                        setColor(e.target.value)
                                    }
                                }
                                }
                            />
                        </div>
                        <Form >
                            <div className='text'>
                            <label><strong>Flip X: </strong></label>
                            </div>
                                <div className='checkbox'>
                            {['checkbox'].map((type) => (
                                <div className="mb-3">
                                    
                                   <Form.Check onChange={(e)=>{ print(e.target.checked)
                                       }}/>
                                </div>
                            ))}
                            </div>
                                <div className='text2'>
                                <label ><font> <strong>Flip Y: </strong></font></label> 

                                </div>
                             
                                <div className='checkbox2'>
                            {['checkbox'].map((type) => (
                                <div className="mb-3">
                                  
                                   <Form.Check/>
                                </div>
                            ))}
                            </div>
                        </Form>
                    </div>
                    <div class="List">
                        <p>List</p>
                        <Stack gap={3}>
                            <div className="bg-light border">Selection 1</div>
                            <div className="bg-light border">Selection 2</div>
                            <div className="bg-light border">Selection 3</div>
                        </Stack>
                    </div> 
                    <div class="Shapes">
                        <ButtonGroup className="sm">
                        {iconButtons}
                        </ButtonGroup>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default App;