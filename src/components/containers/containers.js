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
let GridLayout= styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto&display=swap');
    diplay:grid;
    width:95%;
    height:90%;
    display:grid;
    justify-items:center;
    ${props=>props.rows?"grid-template-rows:"+props.rows:null};
    ${props=> props.columns? "grid-template-columns:"+props.columns
    :
    "@media (max-width:1400px){grid-template-columns:1fr 1fr;} @media (max-width:900px){grid-template-columns:1fr;grid-template-rows:1fr 1fr;} @media (max-width:2000px){grid-template-columns:1fr 1fr;}"
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





export {Section,GridLayout,Content};
