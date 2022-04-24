import React from 'react';
import {Section} from "./../components/containers/containers.js";
import SlideCards from './../components/slide.jsx'
import styled from 'styled-components';


const Content=styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto&display=swap');
   display:flex;
   border:1px solid gray;
   flex-direction:column;
   width:100%;
   height:80vh;
   justify-content:center;
   align-items:center;
   &>h2{
   	color:white;
   	font-family:"Roboto",sans-serif;
   	text-transform:uppercase;
   	font-size:calc(1.5vw);
   	letter-spacing:calc(1vw);
   };
   .swiper {
    border-radius:1em;
    width:80%;
    height:auto;
   	padding-top: 50px;
   	padding-bottom: 50px;
    background-color:rgba(255, 251, 251, 0.4);
   };

   .swiper-slide {
    box-sizing:border-box;
    display:flex;
   	width:calc(40vh);
   	height:calc(40vh + 15vh);
   };
   @media (max-width:900px){
    &>h2{
      font-size:calc(3vw);
    };
     .swiper{
      width:100%;
     };
     .swiper-slide{
      overflow:hidden;
      width:calc(30vh);
      height:calc(30vh + 10vh);
     }
   };
   @media (max-width:570px){
     
    &>h2{
      font-size:calc(4vw);
    };
     .swiper{
      width:100%;
      border-radius:0;
      background-color:rgba(255, 251, 251, 0.1);
     };
     .swiper-slide{
      overflow:hidden;
      width:270px;
      height:370px;
     }
   }
`

export default function Projects(){

  return (<Section id="works">
  	<Content>
  		<h2>Proyects</h2>
  		<SlideCards/>
  	</Content>
  </Section>)	
}