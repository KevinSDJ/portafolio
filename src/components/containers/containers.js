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
  backdrop-filter: blur(5px);
`;
const FlexLayout = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto&display=swap');
   width:100%;
   color:#fff;
   height: 100vh;
   display:flex;
   flex-direction:column;
   justify-content:flex-end;
   margin:0 auto;
   backdrop-filter:blur(5px);
   @media (max-width:900px){
     gap: calc(8vh) 0;
   };
   @media (max-width:570px){
     gap: calc(5vh) 0;
   };
 `;
let GridLayout= styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto&display=swap');
    display:grid;
    height:auto;
    display:grid;
    justify-items:center;
    backdrop-filter:blur(5px);
    @media (max-width:2400px){
      width:95%;
      align-items:flex-start;
      grid-template-columns: 1fr 1fr;
      grid-template-rows:1fr;
    };
    @media (max-width:1800px){
      width:95%;
      align-items:flex-start;
      grid-template-columns: 1fr 1fr;
      grid-template-rows:1fr;
    };
    @media (max-width:1400px){
      width:95%;
      align-items:flex-start;
      grid-template-columns: 1fr 1fr;
      grid-template-rows:1fr;
    };
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
let GridLayout2 = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto&display=swap');
display:grid;
height:80%;
display:grid;
justify-items:center;
backdrop-filter:blur(5px);
font-family:"Open Sans",sans-serif;
font-size:calc(1vw);
color:white;
@media (max-width:2400px){
  width:95%;
  align-items:center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:1fr;
};
@media (max-width:1800px){
  width:95%;
  align-items:center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:1fr;
};
@media (max-width:1400px){
  width:100%;
  gap:40px;
  align-items:center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:1fr;
};
@media (max-width:900px){
  width:100%;
  gap:40px;
  align-items:center;
  grid-template-columns: 1fr;
  grid-template-rows:1fr 1fr;
}
@media (max-width:570px){
  width:100%;
  gap:40px;
  align-items:flex-end;
  grid-template-columns: 1fr;
  grid-template-rows:1fr 1fr;
}
`;
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
  };
  h2{
    text-transform:uppercase;
    font-family:"Roboto",sans-serif;
    letter-spacing:calc(1vw);
  }
  @media (max-width:2400px){
    h2{
      font-size:28px;
    };
    &>p{
    word-wrap: break-word;
    font-family:"Open Sans",sans-serif;
     font-weight: 600;
    font-size:20px;
  };
	};
  @media (max-width:1400px){
    h2{
      font-size:28px;
    };
    &>p{
    word-wrap: break-word;
    font-family:"Open Sans",sans-serif;
    font-size:20px;
  };
	};
  @media (max-width:1200px){
    h2{
      font-size:24px;
    };
    &>p{
    word-wrap: break-word;
    font-family:"Open Sans",sans-serif;
    font-size:18px;
  };
	};
	@media (max-width:900px){
		h2{
      font-size:20px;
    };
    &>p{
    word-wrap: break-word;
    font-family:"Open Sans",sans-serif;
    font-size:18px;
  };
	};
	@media (max-width:570px){
	  h2{
      font-size:18px;
    };
    &>p{
    word-wrap: break-word;
    font-family:"Open Sans",sans-serif;
    font-size:14px;
  };
	};
`





export {Section,GridLayout,Content,FlexLayout,GridLayout2};
