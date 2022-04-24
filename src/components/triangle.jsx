import styled from "styled-components";
import React from 'react';
const Triangle = styled.div`
  position:fixed;
  height:100vh;
  background:linear-gradient(${props=> props?.deg? props.deg:0}deg, rgba(32,247,247,0.5) 40%, rgba(255,255,255,1) 50%, rgba(32,247,247,0.5) 60%);
  @media (max-width:2400px){
    width:calc(40vw);
    right:0;
    clip-path: polygon(100% 0, 5% 50%, 100% 100%, 0 50%);
  };
  @media (max-width:2000px){
    width:calc(40vw);
    right:0;
    clip-path: polygon(100% 0, 5% 50%, 100% 100%, 0 50%);
  };
  @media (max-width:1600px){
    width:calc(40vw);
    right:0;
    clip-path: polygon(100% 0, 5% 50%, 100% 100%, 0 50%);
  };
  @media (max-width:1200px){
    width:calc(40vw);
    right:0;
    clip-path: polygon(100% 0, 5% 50%, 100% 100%, 0 50%);
  };
  @media (max-width:900px){
    top:0;
    width:100%;
    clip-path: polygon(50% 35%, 100% 0, 50% 40%, 0 0);
  };
`

function Tri (){
    let [deg,setDeg]= React.useState(0)
    React.useEffect(()=>{
      let interval= setInterval(()=>{
        setDeg(deg+5)
      if(deg===360){
        setDeg(0)
      }
    },100)
      return ()=>{
        clearInterval(interval)
      }
    })
  
  return <><Triangle deg={deg} /></>
}


export { Triangle,Tri };
