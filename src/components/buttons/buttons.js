import styled from 'styled-components';



const BasisButton = styled.a`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto&display=swap');
  border: 2px solid ${props=>props.color? props.color:"#20f7f7"};
  color :white;
  background-color:transparent;
  line-height: 1;
  font-family:'Open sans',sans-serif;
  margin: 0.5em;
  padding: 1em 2em;
  font-size:calc(1.2vw);
  display:flex;
  align-items:center;
  gap:0 10px;
  text-decoration:none;
  flex-direction:row;
  @media (max-width:900px){
    font-size:calc(2vw);
  };
  @media (max-width:570px){
    font-size:calc(3vw);
    font-weight:700;
  };
  &:hover,focus{
    cursor:pointer;
   	animation:${props=>props.animateName?props.animateName:"pulse"} 1s;
   	box-shadow: 0 0 0 2rem transparent;
   }
  @keyframes ${props=>props.animateName?props.animateName:"pulse"} {
    0% { box-shadow: 0 0 0 0 ${props=>props.color? props.color:"#20f7f7"};}
  }
`
const ButtonsForm= styled.button`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto&display=swap');
border: 2px solid ${props=>props.color? props.color:"#20f7f7"};
color :white;
background-color:transparent;
line-height: 1;
font-family:'Open sans',sans-serif;
margin: 0.5em;
padding: 1em 2em;
font-size:calc(1.2vw);
display:flex;
align-items:center;
gap:0 5px;
text-decoration:none;
flex-direction:row;
@media (max-width:900px){
  font-size:calc(2vw);
};
@media (max-width:570px){
  font-size:calc(3vw);
  font-weight:700;
};
&:hover,focus{
  cursor:pointer;
   animation:${props=>props.animateName?props.animateName:"pulse"} 1s;
   box-shadow: 0 0 0 2rem transparent;
 }
@keyframes ${props=>props.animateName?props.animateName:"pulse"} {
  0% { box-shadow: 0 0 0 0 ${props=>props.color? props.color:"#20f7f7"};}
}
`
export {BasisButton,ButtonsForm}