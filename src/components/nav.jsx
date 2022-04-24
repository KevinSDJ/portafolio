import styled from "styled-components";
import {useEffect,useRef} from 'react';
import { RiHome6Line, RiContactsLine } from "react-icons/ri";
import { MdOutlineInfo } from "react-icons/md";
import { GiSkills } from "react-icons/gi";
import { BsBriefcase } from "react-icons/bs";
import gsap from 'gsap'
const Navbar = styled.div`
  box-sizing:border-box;
  border:1px solid gray;
  position: fixed;
  z-index:4;
  display:flex;
  align-items:center;
  justify-content:center;
  @media (max-width:2600px){
    right:0;
    height:100vh;
    width:calc(10vw);
    &>ol{
      flex-direction: column;
      gap: 1em;
      &>li >a{
        font-size: calc(2vw);
      }
    }
 };
  @media (max-width:2000px){
     right:0;
     height:100vh;
     width:calc(10vw);
     &>ol{
       flex-direction: column;
       gap: 1em;
       &>li >a{
         font-size: calc(2vw);
       }
     }
  };
  
  @media (max-width:1400px){
     right:0;
     height:100vh;
     width:calc(10vw);
     &>ol{
       flex-direction: column;
       gap: 1em;
       &>li >a{
         font-size: calc(2vw);
       }
     }
  };
  @media (max-width:1000px){
    bottom:0 !important;
    width:100%;
    height:calc(10vh);
    &>ol{
       flex-direction: row;
       width:90%;
       justify-content:space-around;
       &>li >a{
         font-size: 2em;
       }
    }
  };
  @media (max-width:520px){
    bottom:0 !important;
    width:100%;
    height:calc(10vh);
    &>ol{
       flex-direction: row;
       width:70%;
       justify-content:space-around;
       &>li >a{
         font-size: 1em;
       }
    }
  };
  & > ol {
    list-style: none;
    padding: 0.5em;
    display: flex;
    align-items: center;
    & > li >a {
      color: #20f7f7;
      &:hover{
         filter: drop-shadow(0 0 20px #20f7f7);
         color: #fff;
      }

  }
  
`;

export default function Nav() {
  let nav= useRef()
  useEffect(()=>{
    gsap.from(nav.current,{
      opacity:0
    })
    gsap.to(nav.current,{
      opacity:1,
      duration:1,
      delay:0.5,
    })
  },[])

  return (
    <Navbar ref={nav}>
      <ol>
        <li>
          <a href="#init" ><RiHome6Line /></a>
        </li>
        <li>
          <a href="#about" ><MdOutlineInfo /></a>
        </li>
        <li>
          <a href="#skills" ><GiSkills /></a>
        </li>
        <li>
          <a href="#works" ><BsBriefcase /></a>
        </li>
        <li>
          <a href="#contact" ><RiContactsLine /></a>
        </li>
      </ol>
    </Navbar>
  );
}
