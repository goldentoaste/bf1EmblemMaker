import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CanvasController from './canvasController';

import { CanvasObj, Vector2 } from './canvasObj';
import Canvas from './canvas';
import Form from 'react-bootstrap/Form'

import DraggableList from "react-draggable-list";

import { svgs, SvgContainer } from './svgsVals'
const print = (...item) => {
    console.log(...item)
}



let controller;
let stuff = [
    //  new CanvasObj(50, 50, 325, 325, "M0 0 L325 0 L325 325 L0 325 Z", "Circle", false, false, 0, "#aadaff", 1),
    //  new CanvasObj(200, 100, 325, 325, "M0 0 L325 0 L325 325 L0 325 Z", "Dogtag", false, false, 0, "#dddddd", 1),
];





const placeHolderList = ["place holder layer1", "place holder layer2", "place holder layer3", "place holder layer4"]

// Mouse X and Y

const listTemplate = ({ item, itemSelected, anySelected, dragHandleProps, commonProps }) => {
    return (
            <div {...dragHandleProps}>
            <img src={svgs["Circle"].src} width={50} height={50}></img>
            <label>{item}</label>
        </div>
    );

}


const generate = (canvasX, canvasY, stuff)=>{
    let output = [];

    for (let item of stuff){
        output.push(item.toJsonObj(canvasX, canvasY));
    }

    let outjson = JSON.stringify(output);
    return `var request = new XMLHttpRequest();
    request.open(
        "POST",
        "https://companion-api.battlefield.com/jsonrpc/web/api?Emblems.newPrivateEmblem",
        !0
    ),
        (request.onreadystatechange = function () {
            if (request.readyState == XMLHttpRequest.DONE) {
                var e = JSON.parse(request.responseText);
                e.result
                    ? (window.location.href =
                        window.location.href.replace("/new", "/edit/") + e.result.slot)
                    : alert("Error");
            }
        }),
        request.setRequestHeader("Content-Type", "application/json;charset=UTF-8"),
        request.setRequestHeader("X-GatewaySession", localStorage.gatewaySessionId),
        (data = {
            jsonrpc: "2.0",
            method: "Emblems.newPrivateEmblem",
            params: {
                data: \`${outjson}\`
            },
            id: "00000000-0000-0000-0000-000000000000",
        }),
        request.send(JSON.stringify(data));
    `;
}

function App() {
    let currentObj = useRef(null);
    let objRef = useRef(stuff);
    let textArea = useRef(null);
    let CanvasRef = useRef(null);
 
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

    const updateStats = (canvas) => {
     CanvasRef.current = canvas;
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

    for (let key of Object.keys(svgs)) {
        let item = svgs[key];
        let max = maxIconSize / Math.max(item.width, item.height);
        iconButtons.push(
            <Button
                key={key}
                onClick={(event) => {
                    objRef.current.push(new CanvasObj(100, 100, item.width, item.height,
                        item.path, key, false, false, 0, '#abcdef', 1
                    ));
                }}>
                <img src={item.src}
                    width={item.width * max}
                    height={item.height * max}
                />
            </Button>
        );
    }
    const onListChange = (list) => {
        print(list);
        objRef.current = list;
    }

    return (

        <div>
            <div className="container">

                <div className="Canvas">
                    {/* <p><strong>Canvas</strong></p> */}
                    <div className='CV'>
                        <Canvas 
                        objects={objRef}
                           onClick={(evt, ctx) => { controller.onClick(evt, ctx) }}
                            onRelease={(evt, ctx) => { controller.onRelease(evt, ctx) }}
                            onMove={(evt, ctx) => { controller.onMove(evt, ctx) }}
                            onRender={() => { updateStats(); }}
                            needRendering={true}
                            currentObj={currentObj}
                            props={{
                                width: 800,
                                height: 800
                            }}
                        />
                    </div>
                </div>
                <div className="InfoGroup">
                    <div className="posGroup">
                        <label ><font> <strong>X: </strong></font></label>
                        <input type={"number"} className="form-control" id="XVal"
                            value={X}
                            onChange={(e) => {
                                if (currentObj.current) {
                                    currentObj.current.x = parseFloat(e.target.value);
                                    setX(parseFloat(e.target.value));
                                }
                            }}
                        />

                        <label ><font> <strong>Y: </strong></font></label>
                        <input type={"number"} className="form-control" id="YVal" value={Y}
                            onChange={(e) => {
                                if (currentObj.current) {
                                    currentObj.current.y = parseFloat(e.target.value);
                                    setY(parseFloat(e.target.value));
                                }
                            }
                            } />
                    </div>

                    <div className="sizeGroup">
                        <label ><font> <strong>W: </strong></font></label>
                        <input type={"number"} className="form-control" id="WVal" value={W}

                            onChange={(e) => {
                                if (currentObj.current) {
                                    currentObj.current.width = parseFloat(e.target.value);
                                    setW(parseFloat(e.target.value));
                                }
                            }
                            } />

                        <label ><font> <strong>H: </strong></font></label>
                        <input type={"number"} className="form-control" id="HVal" value={H}
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
                        <input type={"number"} className="form-control" id="AngleVal" value={angle}
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
                        <input type={"number"} className="form-control" id="OpacityVal" value={opacity}

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
                        <input type={"color"} className="form-control" id="ColorVal" value={color}
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
                                <div key={1} className="mb-3">
                                    <Form.Check onChange={(e) => {
                                        print(e.target.checked)
                                    }} />
                                </div>
                            ))}
                        </div>
                        <div className='text2'>
                            <label ><font> <strong>Flip Y: </strong></font></label>

                        </div>

                        <div className='checkbox2'>
                            {['checkbox'].map((type) => (
                                <div key={1} className="mb-3">
                                    <Form.Check />
                                </div>
                            ))}
                        </div>
                    </Form>

                    <form>
                        <Button id='btn'
                        onClick={(event)=>{
                            textArea.current.value = generate(800, 800, objRef.current);
                            print(textArea.current.value)
                        }}>Generate</Button>
                        <div className="form-group">
                            <textarea  ref={textArea} className="form-control" id="FormControlTextarea1" rows="3"></textarea>
                        </div>
                    </form>

                    <DraggableList list={placeHolderList}
                        itemKey={(item) => item}
                        template={listTemplate}
                        onMoveEnd={(newList) => { }}
                    >

                    </DraggableList>

                </div>


            </div>
            <div className="Shapes">
                <ButtonGroup className="sm">
                    {iconButtons}
                </ButtonGroup>
            </div>

        </div >

    );
}

export default App;