import React, { Suspense } from "react";
import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import Final1 from "./Final1";
import Final2 from "./Final2";
import Final3 from "./Final3";
import Final4 from "./Final4";
import Final5 from "./Final5";


export default function App() {

  const [currentModel, setCurrentModel] = useState(<Final1 />);

  const handleClick = (e) => {
    let value = e.target.value
    if(value === 'Final1'){
      setCurrentModel(<Final1 />)
    }
    if(value === 'Final2'){
      setCurrentModel(<Final2 />)
    }
    if(value === 'Final3'){
      setCurrentModel(<Final3 />)
    }
    if(value === 'Final4'){
      setCurrentModel(<Final4 />)
    }
    if(value === 'Final5'){
      setCurrentModel(<Final5 />)
    }
  }
 
  return (
    <div className="App">
      <div className="canvas">
        <Canvas camera={{position: [0, 0, 50]}}>
          <Suspense fallback={null}>
          {currentModel}
          </Suspense>
          <hemisphereLight args={['#fff', '#333', 0.5]} />
          <ambientLight intensity={0.1} />
          {/* <ambientLight args={[0xff0000]} intensity={0} />
          <directionalLight position={[0, 0, 20]} intensity={0.5} /> */}
          <OrbitControls target={[0, 0, 0]}/>
        </Canvas>
      </div>

      <div className="buttons">
          <button className="button" value='Final1' onClick={handleClick}>1</button>
          <button className="button" value="Final2" onClick={handleClick}>2</button>
          <button className="button" value="Final3" onClick={handleClick}>3</button>
          <button className="button" value="Final4" onClick={handleClick}>4</button>
          <button className="button" value="Final5" onClick={handleClick}>5</button>
      </div>
    </div>
  );
}