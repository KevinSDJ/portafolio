import styled from 'styled-components';

const Form = styled.form`
   @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto&display=swap');
   margin:0 auto;
   font-family:"Open Sans",sans-serif;
   border:1px solid gray;
   width:40%;
   display:flex;
   flex-direction:column;
   align-items:center;
   gap:10px;
   @media (max-width:900px){
      width:90%;
      
   };
   @media (max-width:570px){
      width:100%;
      
   };
   &>label{
   	display:flex;
   	width:100%;
   	flex-direction:column;
   	gap:5px;
   };
   &>a:hover{
   	svg{
   		transform:rotate(45deg);
   	}
   };
`




export {Form}