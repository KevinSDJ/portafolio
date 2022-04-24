import styled from "styled-components";

let Section = styled.section`
  position:relative;
  width: 100%;
  height:100vh;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  border:1px solid gray;
`;
const FlexLayout = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto&display=swap');
   width:100%;
   color:#fff;
   display:flex;
   flex-direction:column;
   justify-content:space-around;
   margin:0 auto;
   backdrop-filter:blur(5px);
 `;
let GridLayout= styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto&display=swap');
    diplay:grid;
    height:auto;
    display:grid;
    justify-items:center;
    backdrop-filter:blur(5px);
    @media (max-width:2400px){
      width:95%;
      align-items:flex-start;
      grid-template-columns: 1fr 1fr;
      grid-template-rows:1fr;
    }
    @media (max-width:1400px){
      width:95%;
      align-items:flex-start;
      grid-template-columns: 1fr 1fr;
      grid-template-rows:1fr;
    }
    @media (max-width:1800px){
      width:95%;
      align-items:flex-start;
      grid-template-columns: 1fr 1fr;
      grid-template-rows:1fr;
    }
    @media (max-width:900px){
      width:100%;
      gap:40px;
      grid-template-columns: 1fr;
      grid-template-rows:1fr 1fr;
    }
    font-family:"Open Sans",sans-serif;
    font-size:calc(1vw);
    color:white;
`

const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto&display=swap');
  display:flex;
  flex-direction:column;
  gap:${props=>props.gap?props.gap:"calc(1vh)"};
  justify-content:center;
  align-items:center;
  ${props=>props?{...props}:null};
  &>p{
    width:60%;
    font-family:"Open Sans",sans-serif;
    font-size:calc(1vw);
  };
  &>h2{
    text-transform:uppercase;
    font-family:"Roboto",sans-serif;
    font-size:calc(1.2vw);
    letter-spacing:calc(1vw);
  }
`





export {Section,GridLayout,Content,FlexLayout};
