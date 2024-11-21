import "./css/ui.css";
import { Link } from "react-router-dom";
import type * as CSS from 'csstype';
import { useState } from "react";

function BlueArena() {
  return (
    <Link to="/blue-sea" className="arena">
        <img className="arena-cover" src="/bluesea.png"/>
        <div className="arena-header">Blue Sea
          <div className="arena-sub-header">Arena Description and prize</div>
        </div>
    </Link>
)};
function GandArena() {
    return (
      <Link to="/grand-line" className="arena">
        <img className="arena-cover" src="/grandline.png"/>
        <div className="arena-header">Grand Line
          <div className="arena-sub-header">Arena Description and prize</div>
        </div>
      </Link>
)};
function WorldArena() {
  return (
    <Link to="/new-world" className="arena">
        <img className="arena-cover" src="/newworld.png"/>
        <div className="arena-header">New World
          <div className="arena-sub-header">Arena Description</div>
        </div>
    </Link>
)};

export default function Arena(H="55vh") {
  // set CSS Variables
  const BodyStyle: CSS.Properties = {
    height: H, // by View Hiegth not more 55vh
  };
  // Set Arena controller
  const [ArenaId, setArenaId] = useState(1);
  // Set Arena Variables and Conditionnal
  let Arena = "Blue Sea";
  if (ArenaId == 2) {Arena = "Grand Line"}
  if (ArenaId == 3) {Arena = "New World"}
  return (
    <div className="bar-down">
    <div className="map-header">
      <div className="map-header-outline"></div>
       <div className="map-header-nextline"></div>
        <div className="map-header-stick"></div>
           <div className="map-header-line">Arena</div>
        <div className="map-header-stick"></div>
       <div className="map-header-nextline"></div>
      <div className="map-header-outline"></div>
    </div>
      <div className="map-body" style={BodyStyle}> 
        {ArenaId == 1? <BlueArena/> : ArenaId == 2? <GandArena/> : <WorldArena/>}
      </div>
    <div className="map-header">
      <div className="map-header-outline"></div>
       <div className="map-header-nextline"></div>
        <div className="map-header-stick"></div>
           <div className="map-header-line">
            {Arena}
           </div>
        <div className="map-header-stick"></div>
       <div className="map-header-nextline"></div>
      <div className="map-header-outline"></div>
    </div>
    <div className="bar-side">
      <div onClick={() => setArenaId(1)}>1</div>
      <div onClick={() => setArenaId(2)}>2</div>
      <div onClick={() => setArenaId(3)}>3</div>
    </div>
  </div>
)}
