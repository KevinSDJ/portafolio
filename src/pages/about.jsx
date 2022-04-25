import React from "react";
import {Section,GridLayout2,Content} from "./../components/containers/containers.js";
import Escena from './../components/three/scene.jsx'

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
