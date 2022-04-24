import { useState, useRef } from 'react';
import styled from 'styled-components';
import { Section, FlexLayout } from './../components/containers/containers.js'
import { RiChatSmile3Fill, RiSendPlaneFill } from 'react-icons/ri';
import { ButtonsForm } from './../components/buttons/buttons.js'
import { Form } from './../components/form.js'
import { VITE_APP_SERVICE_ID, VITE_APP_TEMPLATE_ID, VITE_APP_PUBLIC_KEY } from './../data/env.js'
import emailjs from '@emailjs/browser';

const MailSection = styled.div`
 @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto&display=swap');
  width:80%;
  border:1px solid gray;
  display:flex;
  flex-direction:column;
  justify-content:center;
  margin:0 auto;
  h1{
	text-transform: uppercase;
  	text-align:center;
  	letter-spacing:calc(1vw);
  	font-family:"Roboto",sans-serif;
  };
`
const FooterSection = styled.footer`
  width:80%;
  height:100px;
  margin:0 auto;
  border:1px solid gray;
`

export default function Contact() {
	const [data, setData] = useState({
		name: "",
		reply_to: "",
		message: ""
	})

	let form = useRef()
	// se que debo controlar que no se envie otra cosa que no sea texto pero lo dejare para despues
	const handleChange = (e) => {
		setData(prev => {
			return { ...prev, [e.target.name]: e.target.value }
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(data)
		
			emailjs.sendForm(VITE_APP_SERVICE_ID, VITE_APP_TEMPLATE_ID, form.current, VITE_APP_PUBLIC_KEY)
				.then((result) => {
					setData({ name: "", issue: "", message: "", reply_to: "" })
					console.log(result.text);
				}, (error) => {
					console.log(error.text);
				});
		
	}



	return (<Section id="contact">
		<FlexLayout columns={"1fr"} rows={"2fr 1fr"} >
			<MailSection>
				<h1>let's talk <RiChatSmile3Fill /></h1>
				<Form ref={form} onSubmit={handleSubmit}>
					<label htmlFor="name">Name
						<input id="name" type="text" name="name" onChange={handleChange} value={data.name} required />
					</label>
					<label htmlFor="reply_to">Email
						<input id="reply_to" type="reply_to" name="reply_to" onChange={handleChange} value={data.reply_to} required />
					</label>
					<label htmlFor="message" >Message
						<textarea id="message" name="message" rows="5" onChange={handleChange} cols="50" value={data.message} required ></textarea>
					</label>
					
					<ButtonsForm type="submit" color={"#2a9d8f"} animateName={"pulse3"}>send <RiSendPlaneFill /></ButtonsForm>
				</Form>
			</MailSection>
			<FooterSection />
		</FlexLayout>
	</Section>)
}