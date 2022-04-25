import styled from 'styled-components';

const Form = styled.form`
   @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto&display=swap');
   margin:0 auto;
   font-family:"Open Sans",sans-serif;
   width:40%;
   display:flex;
   flex-direction:column;
   align-items:center;
   gap:10px;
   label{
      input:focus{
        outline: none;
        background-color:rgb(180, 210, 238);
      };
      textarea:focus{
         outline: none;
        background-color:rgb(180, 210, 238);
      }
   }
   @media (max-width:2400px){
      label{
         font-size:20px;
         input{
           padding:5px;
           font-size:20px
         };
      }
   };

   @media (max-width:1400px){
      width:70%;
      label{
         input{
           padding:5px;
         };
      }
   };
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
   &>button{
      font-weight: 700;
      font-size:1em;
   }
   &>button:hover{
   	svg{
   		transform:rotate(45deg);
   	}
   };
`




export {Form}