import React from 'react';
import styled from 'styled-components';
import {BsEyeFill} from 'react-icons/bs';
import {BiCode} from 'react-icons/bi';



const Content = styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto&display=swap');
   width:100%;
   display:block;
   height:100%;
   position:relative;
   background-image:url(${props=>props.img});
   background-repeat:no-repeat;
   background-position:center;
   background-size:cover;
   border-radius:1em;
   overflow:hidden;
   #source_view_code{
      overflow:hidden;
   	  position:absolute;
   	  left:5px;
   	  backdrop-filter:blur(10px);
   	  #btngroups{
   	  	display:flex;
   	  	font-family:"Open Sans",sans-serif;
        align-items:center;
        justify-content:center;
        span{
          color:white;
          padding:5px;
        }
        button{
          border:none;
          font-size:20px;
          margin:0;
          color:#fff;
          padding:0;
          background-color:transparent;
          display:flex;
          align-items:center;
          @media (max-width:900px){
            font-size:18px
           };
           @media (max-width:570px){
             font-size:14px; 
           };
          a{
            color:#fff;
            display:flex;
            align-items:center;
            padding:10px;
            &:hover{
              background-color:#2a9d8f;
            }
          }
        }
   	  };
   }
`
const CardData= styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto&display=swap');
   position:absolute;
   padding:0 10px;
   bottom:0;
   height:50%;
   width:100%;
   background-color:rgba(255,255,255,0.5);
   backdrop-filter:blur(5px);
   h2{
     font-size:"Roboto",sans-serif;
   };
   p{
    font-size:"Open Sans",sans-serif;
   };
`




export default function Card({img,title,resume,code,preview,stack,version,status}){
	return (<Content img={img}>
	    <div id="source_view_code">
	      <span id="btngroups">
        <span>V{version}</span>
        <button><a href={preview} target="_blank" ><BsEyeFill/></a></button>
        <button><a href={code} target="_blank"><BiCode/></a></button>
        </span>
	    </div>
      <CardData>
          <h2>{title}</h2>
          {status? <button>{status}</button>:null}
          <p>{resume}</p>
          <span>Stack:</span>
          <p>{stack.join(', ')}</p>
      </CardData>
	</Content>)
}