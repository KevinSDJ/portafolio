import React from 'react';
import styled from 'styled-components';
import {BsEyeFill} from 'react-icons/bs';
import {BiCode} from 'react-icons/bi';
import gsap from 'gsap';



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
   	  left: 0;
      right: 0;
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
let CardData= styled.div`
   @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto&display=swap');
   position:absolute;
   bottom:0;
   padding:20px 15px;
   height:auto;
   opacity:0;
   width:100%;
   background-color:rgba(255,255,255,0.5);
   backdrop-filter:blur(5px);
   button{
     background-color: palegreen;
     font-family:"Roboto",sans-serif;
     color: #4e4d4d;
     border:none;
   };
   h2{
     font-family:"Roboto",sans-serif;
     color: #4e4d4d;
     margin: 0;
   };
   p{
    font-family:"Open Sans",sans-serif;
    width:95%;
    height: 60px;
    overflow: auto;
   };
   span{
     display:flex;
     flex-direction: column;
    &>b{
      font-family:"Roboto",sans-serif;
      color: #4e4d4d;
    };
    &>p{
      font-family:"Roboto",sans-serif;
      overflow:none;
      height: auto;
      margin:0;
    }
   };
   @media (max-width:1400px){
    h2{
      font-size:24px;
    };
    p{
      font-size:17px;
      height: 80px;
    };
    span{
     &>b{
       font-size:17px;
     };
     &>p{
       font-size:17px;
     }

    };
  };
   @media (max-width:900px){
    h2{
      font-size:20px;
    };
    p{
      font-size:14px;
      height: 50px;
    };
    span{
     &>b{
       font-size:14px;
     };
     &>p{
       font-size:14px;
     }

    };
  };
   @media (max-width:570px){
     h2{
       font-size:18px;
     };
     p{
       font-size:14px;
       height: 30px;
     };
     span{
      &>b{
        font-size:14px;
      };
      &>p{
        font-size:14px;
      }

     };
   }
`




export default function Card({img,title,resume,code,preview,stack,version,status}){
  let cardata= React.useRef()
  let card= React.useRef()
  
  React.useLayoutEffect(()=>{
    gsap.to(cardata.current,{
      y:400,
      opacity:0,
    })
    card.current.addEventListener("mouseenter", () =>{
      gsap.to(cardata.current,{
        y:0,
        opacity: 1,
        duration:1,
        ease:'linear'
      })
    });
    card.current.addEventListener("mouseleave", () => {
      gsap.to(cardata.current,{
        y:400,
        opacity:0.5,
        duration:1,
        ease:'linear'
      })
    });
  },[])
	return (<Content img={img} ref={card}>
	    <div id="source_view_code">
	      <span id="btngroups">
        <span>V{version}</span>
        <button><a href={preview} target="_blank" ><BsEyeFill/></a></button>
        <button><a href={code} target="_blank"><BiCode/></a></button>
        </span>
	    </div>
      <CardData ref={cardata}>
          <h2>{title}</h2>
          {status? <button>{status}</button>:null}
          <p>{resume}</p>
          <span><b>STACK:</b>
          <p>{stack.join(', ')}</p>
          </span>
      </CardData>
	</Content>)
}