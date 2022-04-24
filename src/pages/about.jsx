import React from "react";
import {Section,GridLayout2,Content} from "./../components/containers/containers.js";
import styled from 'styled-components';
import Escena from './../components/three/scene.jsx'



const Avatar= styled.div`
  padding:calc(5vw);
  background:url("https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg");
  background-repeat:non-repeat;
  background-size:cover;
  background-position:center;
  border-radius: 90% 90% 90% 90% / 90% 5% 87% 5%;
  background-color:#c5fafa;
`

export default function About() {
  return(<Section id="about">
    <GridLayout2>
      <Content>
        <h2>About Me</h2>
        <p>Hsdasd sadsadsad sads sdad ssd d dsadsadsasds sdsa sdadsd
         dsad sdsad adsdasd sadsadsad dsads s dsadsad
         </p>
      </Content>
      <Escena/>
    </GridLayout2>
  </Section>)
}
