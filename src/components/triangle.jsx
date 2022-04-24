import styled from "styled-components";
import React from 'react';
const Triangle = styled.div`
  position:fixed;
  right:0;
  width:calc(40vw);
  height:100vh;
  clip-path: polygon(100% 0, 5% 50%, 100% 100%, 0 50%);
  background:linear-gradient(${props=> props?.deg? props.deg:0}deg, rgba(32,247,247,0.5) 40%, rgba(255,255,255,1) 50%, rgba(32,247,247,0.5) 60%);
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
