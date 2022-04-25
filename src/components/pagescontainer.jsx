import {useRef} from 'react'
import styled from "styled-components";
import Initial from "./../pages/initi.jsx";
import About from "./../pages/about.jsx";
import Skills from "./../pages/skills.jsx";
import Projects from './../pages/projects.jsx';
import Contact from './../pages/contact.jsx';
import Nav from "./nav.jsx";
import LogoIcon from './logo.jsx'
import {NotfyVersion} from './vrsion.jsx';
import {Triangle,Tri} from './triangle.jsx'
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease:'bounce',duration:1})

const PgContainer = styled.div`
  display:block;
  box-sizing:border-box;
  background-color: black;
  width: 100%;
  height:auto;
  overflow:hidden;
  scroll-behavior: smooth;
`;

export default function PagesContainer() {
  let conteiner= useRef()

 

  return (
    <PgContainer id="pgContainer"ref={conteiner}>
      <LogoIcon/>
      <NotfyVersion>
        {"V1.2"}
      </NotfyVersion>
      <Tri/>
      <Nav />
      <Initial />
      <About  />
      <Skills  />
      <Projects/>
      <Contact/>
    </PgContainer>
  );
}
