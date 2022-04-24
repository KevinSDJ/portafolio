import {useEffect,useRef} from "react";
import {Section} from "./../components/containers/containers.js";
import styled from "styled-components";
import {BasisButton} from './../components/buttons/buttons.js'
import {FaFileDownload} from 'react-icons/fa'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import pdf from './../data/kevin_De_Jesus_cv.pdf';
gsap.registerPlugin(ScrollTrigger)



const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto&display=swap');
  &> h4,p,a{
    margin-left:calc(10vw)
  }
  width:100%;
  &>h4{
      color:white;
      font-family:"Roboto",sans-serif;
      opacity:0;
      letter-spacing:calc(0.5vw);
      font-size:calc(2.5vw);
      text-transform:uppercase;
    }
  &>p{
    font-family:"Open Sans",sans-serif;
    color:white;
    font-size:calc(1.5vw);
    opacity:0;
    letter-spacing:calc(0.5vw);
  }
  &>span{
    display:flex;
    flex-direction:row;
  }
  &>a{
    opacity:0
  };
  @media (max-width:900px){
    display:flex;
    flex-direction:column;
    gap:20% 0;
    h4{
      font-size:calc(4vw);
    }
    p{
      font-size:calc(3vw);
    }
  }
`;

export default function Initial() {
  let text= useRef()
  let btn= useRef()
  let subt= useRef()
  let btn2 = useRef()
  useEffect(()=>{
   gsap.from(text.current,{
    x:400,
    opacity:0
   })
   gsap.to(text.current,{
    scrollTrigger:{
      trigger:text.current,
      toggleActions:'play none none none'
    },
    x:0,
    duration:1,
    delay:0.2,
    opacity:1,
    ease:'linear'
   }) 
    gsap.from(btn.current,{
    y:-400,
    opacity:0
   })
   gsap.to(btn.current,{
    scrollTrigger:{
      trigger:btn.current,
      toggleActions:'play none none none'
    },
    duration:1,
    y:0,
    opacity:1
   })
   gsap.from(subt.current,{
    x:-400,
    opacity:0
   })
    gsap.from(btn2.current,{
    y:-400,
    opacity:0
   })
   gsap.to(btn2.current,{
    scrollTrigger:{
      trigger:btn.current,
      toggleActions:'play none none none'
    },
    duration:1,
    y:0,
    opacity:1
   })
   gsap.to(subt.current,{
    scrollTrigger:{
      trigger:btn.current,
      toggleActions:'play none none none'
    },
    x:0,
    duration:1,
    delay:1,
    ease:'linear',
    opacity:1
   })
  },[])


  return (
    <Section id="init" >
      <Content >
          <h4 id="text" ref={text} >Hi I'm kevin <br /> A Web Developer</h4>
          <p ref={subt} >Full Stack Web Developer | Front End</p>
          <span>
             <BasisButton ref={btn} href={"#contact"}>contact me</BasisButton>
             <BasisButton ref={btn2} href={pdf} target="_blank" rel="noopener noreferrer" download="fullstack_developer_kevin_de_jesus_cv.pdf"   color={"#bb3e03"} animateName={"pulse2"} >cv download <FaFileDownload style={{color:"#bb3e03"}}/></BasisButton>
          </span>
      </Content>
    </Section>
  );
}
