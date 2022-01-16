import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from 'react-bootstrap/Stack';
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";













function App() {

    return (
        
        
        <body>
            <div class="container">
                <div class="Canvas">
                    <p><strong>Canvas</strong></p>
                        <div className='CV'>
                            
                            <CanvasDraw>
                        gridSizeX: 25
                        gridSizeY: 25
                        </CanvasDraw>


                        </div>
                </div>
                <div class="Position">
                    <p>X Val: Lorem Empsum</p> 
                    <p>Y Val: Lorem Empsum</p> <br></br>
                    <p>Height: Lorem Empsum</p>
                    <p>Width: Lorem Empsum</p> <br></br>
                    <p>Angle: Lorem Empsum</p>
                    <p>Opacity: Lorem Empsum</p>
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
                    
                    
                    
                    <p>Shapes</p>

                    <ButtonGroup className="sm">
                        <Button >SVG Shape 1</Button>
                        <Button >SVG Shape 2</Button>
                        <Button >SVG Shape 3</Button>
                    </ButtonGroup>

                    
                    
                </div>









            </div>
                
            



            



        </body>
    );
    }

export default App;