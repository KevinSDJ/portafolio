import React from "react";
import {Section,GridLayout2,Content} from "./../components/containers/containers.js";
import Escena from './../components/three/scene.jsx'

export default function About() {
  return(<Section id="about">
    <GridLayout2>
      <Content>
        <h2>About Me 👋</h2>
        <p>
        I discovered programming more than a year ago, as I always liked technology, I was instantly hooked, it was difficult, a real challenge for me, but I didn't give up because despite everything I liked it, I gave my best effort to learn how to work team up. I like to help, learn from others, I want to continue building things and be able to share it with others.
         </p>
      </Content>
      
    </GridLayout2>
  </Section>)
}
