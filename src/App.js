import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Spline from "@splinetool/react-spline";

function App() {
  return (
    <div className="flex w-screen h-screen items-center justify-center relative bg-primary pb-20">
      <Spline scene="https://prod.spline.design/mN6pfn4E4QGERrzW/scene.splinecode" />
    </div>
  );
}

export default App;
