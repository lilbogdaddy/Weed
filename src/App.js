import React from "react";
import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import Model from './Anothernew'
import Design1 from "./Design1";

export default function App() {

  const [currentModel, setCurrentModel] = useState(<Model />);

  const handleClick = (e) => {
    let value = e.target.value
    if(value === 'Model'){
      setCurrentModel(<Model />)
    }
    if(value === 'Design1'){
      setCurrentModel(<Design1 />)
    }
  }
 
  return (
    <div className="App">
      <div className="canvas">
        <Canvas camera={{position: [0, 0, 50]}}>
          {currentModel}
          <hemisphereLight args={['#fff', '#333', 0.5]} />
          <ambientLight intensity={0.1} />
          {/* <ambientLight args={[0xff0000]} intensity={0} />
          <directionalLight position={[0, 0, 20]} intensity={0.5} /> */}
          <OrbitControls target={[0, 0, 0]}/>
        </Canvas>
      </div>

      <div className="buttons">
          <button className="button" value='Model' onClick={handleClick}>1</button>
          <button className="button" value="Design1" onClick={handleClick}>2</button>
      </div>
    </div>
  );
}