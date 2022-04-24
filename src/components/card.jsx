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
   border-radius:2em;
   overflow:hidden;
   &> #source_view_code{
   	  position:absolute;
   	  right:30px;
   	  backdrop-filter:blur(10px);
   	  &> #btngroups{
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
   	  }
   }
`





export default function Card({img,title,resume,code,preview,stack,version,status}){
	return (<Content img={img}>
	    <div id="source_view_code">
	      <span id="btngroups">
        <span>v1</span>
        <button><a href={preview} target="_blank" ><BsEyeFill/></a></button>
        <button><a href={code} target="_blank"><BiCode/></a></button>
        </span>
	    </div>
		<div id="data_proyect">
		    <h2>{title}</h2>
        {status&& <button>{status}</button>}
		    <p>{resume}</p>
		    <span><b>Stack</b><p>{stack.join(', ')}</p></span>
		</div>
	</Content>)
}