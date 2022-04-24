import {useState,useRef} from 'react';
import styled from 'styled-components';
import {Section,GridLayout} from './../components/containers/containers.js'
import {RiChatSmile3Fill,RiSendPlaneFill} from 'react-icons/ri';
import {BasisButton} from './../components/buttons/buttons.js'
import {Form} from './../components/form.js'
import emailjs from '@emailjs/browser';
import env from 'react-dotenv'


const MailSection= styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto&display=swap');
  width:80%;
  border:1px solid gray;
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin:0 auto;
  &>h1{
  	text-align:center;
  	letter-spacing:calc(1vw);
  	font-family:"Roboto",sans-serif;
  };
`
const FooterSection= styled.footer`
  width:80%;
  border:1px solid gray;
`

export default function Contact(){
	const [data,setData] = useState({
		name:"",
		issue:"",
		reply_to:"",
		message:""
	})

	let form= useRef()
	// se que debo controlar que no se envie otra cosa que no sea texto pero lo dejare para despues
	const handleChange=(e)=>{
		setData(prev=>{
			return {...prev,[e.target.name]:e.target.value}
		})
	}

	const handleSubmit=(e)=>{
		e.preventDefault()
		emailjs.sendForm(env.REACT_APP_SERVICE_ID,env.REACT_APP_TEMPLATE_ID,form.current,env.REACT_APP_PUBLIC_KEY)
		.then((result) => {
			setData({name:"",issue:"",message:"",["reply_to"]:""})
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
	}



	return (<Section id="contact">
	        <GridLayout columns={"1fr"} rows={"2fr 1fr"} >
	        	<MailSection>
	        	    <h1>let's talk <RiChatSmile3Fill/></h1>
	        	   <Form ref={form} onSubmit={handleSubmit}>
	        	     <label htmlFor="name">Name
	        	     <input id="name" type="text" name="name" onChange={handleChange} value={data.name} required/>
	        	     </label>
	        	     <label htmlFor="reply_to">Email
	        	     <input id="reply_to" type="reply_to" name="reply_to" onChange={handleChange} value={data.reply_to} required/>
	        	     </label>
	        	     <label htmlFor="issue">Issue
	        	     <input id="issue" type="text" name="issue" onChange={handleChange} value={data.issue} required/>
	        	     </label>
	        	     <label htmlFor="message" >Message
	        	       <textarea id="message" name="message" rows="5" onChange={handleChange} cols="50" value={data.message} ></textarea>
	                 </label>
	        	     <BasisButton type="submit" color={"#2a9d8f"} animateName={"pulse3"}>send <RiSendPlaneFill/></BasisButton>
	        	   </Form>
	        	</MailSection>
	        	<FooterSection/>
	        </GridLayout>
	</Section>)
}