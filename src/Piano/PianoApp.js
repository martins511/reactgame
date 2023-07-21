import React from 'react'
import "./Piano.css"
import C from'./notes/C.mp3'
import Db from './notes/Db.mp3'
import D from './notes/D.mp3'
import Eb from'./notes/Eb.mp3'
import E from './notes/E.mp3'
import F from './notes/F.mp3'
import Gb from'./notes/Gb.mp3'
import G from './notes/G.mp3'
import Ab from './notes/Ab.mp3'
import A from'./notes/A.mp3'
import Bb from './notes/Bb.mp3'
import B from './notes/B.mp3'
import { useRef } from 'react'
const PianoApp = () => {
  const au1 = useRef(null)
  const au2 = useRef(null)
  const au3 = useRef(null)
  const au4 = useRef(null)
  const au5 = useRef(null)
  const au6 = useRef(null)
  const au7 = useRef(null)
  const au8 = useRef(null)
  const au9 = useRef(null)
  const au10 = useRef(null)
  const au11 = useRef(null)
  const au12 = useRef(null)


  //const keys = document.querySelectorAll('.key')

  const playNote =(key, e)=>{
    key.current.currentTime = 0;
    key.current.play();
    
    // e.target.classList.add
    e.target.classList.add('active')
    setTimeout(() => {
      e.target.classList.remove("active")
      }, 500)
  
  }
  const playPiano =(key) =>{
      const audioNote = document.getElementById(key);
      audioNote.currentTime = 0
      audioNote.play()
  }
  return (
    <div className="body">
    <div className="piano">
      {/* <div  onClick={() => playPiano('C')} className="key white" ></div>
      <div  onClick={() => playPiano('Db')} className="key black" ></div>
      <div onClick={() => playPiano('D')} className="key white"></div>
      <div  onClick={() => playPiano('Eb')} className="key white"></div>
      <div onClick={() => playPiano('E')} className="key black"></div>
      <div onClick={() => playPiano('F')} className="key white"></div>
      <div  onClick={() => playPiano('Gb')} className="key black"></div>
      <div onClick={() => playPiano('G')} className="key white"></div>
      <div  onClick={() => playPiano('Ab')} className="key black"></div>
      <div onClick={() => playPiano('A')} className="key white"></div>
      <div  onClick={() => playPiano('Bb')} className="key black"></div>
      <div onClick={() => playPiano('B')} className="key white"></div> */}
      <div  onClick={(e) => playNote(au1, e)} className="key white" ></div>
      <div  onClick={(e) => playNote(au2,e)} className="key black" ></div>
      <div onClick={(e) => playNote(au3,e)} className="key white"></div>
      <div  onClick={(e) => playNote(au4,e)} className="key white"></div>
      <div onClick={(e) => playNote(au5)} className="key black"></div>
      <div onClick={(e) => playNote(au6,e)} className="key white"></div>
      <div  onClick={(e) => playNote(au7,e)} className="key black"></div>
      <div onClick={(e) => playNote(au8, e )} className="key white"></div>
      <div  onClick={(e) => playNote(au9, e)} className="key black"></div>
      <div onClick={(e) => playNote(au10, e)} className="key white"></div>
      <div  onClick={(e) => playNote(au11, e)} className="key black"></div>
      <div onClick={(e) => playNote(au12, e)} className="key white"></div>
      </div>
      <div className="audio">
      {/* <audio id ="C" src={C}></audio>
      <audio id ="Db" src={Db}></audio>
      <audio id ="D" src={D}></audio>
      <audio id ="Eb" src={Eb}></audio>
      <audio id ="E" src={E}></audio>
      <audio id ="F" src={F}></audio>
      <audio id ="Gb" src={Gb}></audio>
      <audio id ="G" src={G}></audio>
      <audio id ="Ab" src={Ab}></audio>
      <audio id ="A" src={A}></audio>
      <audio id ="Bb" src={Bb}></audio>
      <audio id ="B" src={B}></audio> */}
      <audio ref ={au1} src={C}></audio>
      <audio ref ={au2}  src={Db}></audio>
      <audio ref ={au3} src={D}></audio>
      <audio ref ={au4}  src={Eb}></audio>
      <audio ref ={au5} src={E}></audio>
      <audio ref ={au6} src={F}></audio>
      <audio ref ={au7}  src={Gb}></audio>
      <audio ref ={au8} src={G}></audio>
      <audio ref ={au9}  src={Ab}></audio>
      <audio ref ={au10} src={A}></audio>
      <audio ref ={au11}  src={Bb}></audio>
      <audio ref ={au12} src={B}></audio>
      </div>
      </div>
  )
}

export default PianoApp
