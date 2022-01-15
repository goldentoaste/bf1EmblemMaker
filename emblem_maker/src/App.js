import React, { useEffect } from 'react';
import './App.css';

import Canvas from './canvas';
import CanvasObj from './canvasObj';

import svgs from './svgsVals'


const print = (...item) => {
    console.log(...item)
}

const getAllSvgs = () => {
    // let xhttp;

    // if(window.XMLHttpRequest){
    //     xhttp = new XMLHttpRequest();
    // }
    // else{
    //     print("oh no!");
    // }

    // xhttp.open("GET", "./svgs/Circle.svg");
    // xhttp.send();
    // xhttp.onreadystatechange = (ev) =>{
    //     print(ev);
    //     print(xhttp.responseXML);
    // }
    print(svgs);

}   


function App() {
    useEffect(getAllSvgs, [])
    //todo test rotation, implement transparency,width, height, flip X&Y and also mouse Drag.
    // let stuff = [
    //     // new CanvasObj(50, 50, 325, 325, "M0 0 L325 0 L325 325 L0 325 Z", "", false, false, 0, "#aadaff", 1),
    //     new CanvasObj(200, 100, 325, 325, "M0 0 L325 0 L325 325 L0 325 Z", "", false, false, 0, "#dddddd", 1),
    // ];



//     return (
//         <div className='canvasContainer'>
//             <h1>Hello</h1>
//             <Canvas objects={stuff}
//                 onClick={(event) => print("onClick", event.button)}
//                 onRelease={(event) => print("onRelease", event.button)}
//                 onMove={(event) => print("onMove", event.button)}
//                 onRender={() => { }}
//                 needRendering={true}
//                 props={{
//                     width: 1000,
//                     height: 1000
//                 }}
//             />
//         </div>
//     )
// }
        
        return (

        <body>
            <div className='main'>
                
                <div className='canvas'>

                    <p>Placeholder for canvas</p> 

                </div>
                <div className='position'>

                    <div className='border rounded m-3 p-5 shadow bg-warning'>
                        <p>X Position and Y Position</p>
                    </div>
                    <div className='border rounded m-3 p-5 shadow bg-warning'>
                        <p>Height and Width</p>
                    </div>
                    <div className='width'>

                    </div>

                </div>


                <div className='shapes'>
                    <p>Placeholder for shapes</p>

                </div>

                <div className='list'>
                    <p>Placeholder for list</p>

                </div>




            </div>
    

            
        </body>

        )
    }
export default App;