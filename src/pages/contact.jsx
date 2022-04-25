import { useState, useRef } from 'react';
import styled from 'styled-components';
import { Section, FlexLayout } from './../components/containers/containers.js'
import { RiChatSmile3Fill, RiSendPlaneFill, RiGithubFill, RiLinkedinBoxFill } from 'react-icons/ri';
import { HiLocationMarker } from 'react-icons/hi';
import { FaPhoneSquareAlt } from 'react-icons/fa';
import { ButtonsForm } from './../components/buttons/buttons.js'
import { Form } from './../components/form.js'
import { VITE_APP_SERVICE_ID, VITE_APP_TEMPLATE_ID, VITE_APP_PUBLIC_KEY } from './../data/env.js'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import { Perfil } from '../components/perfil.jsx';
import 'react-toastify/dist/ReactToastify.css';

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
    
    @media (max-width:1200px){
		h1{
			font-size:28px;
		}
	};
	@media (max-width:900px){
		h1{
			font-size:26px;
		}
	};
	@media (max-width:570px){
	 h1{
		 font-size:24px;
	 }
	};
`
const FooterSection = styled.footer`
  width:100%;
  height:300px;
  margin:0 auto;
  border:1px solid gray;
  color:white;
  #perfilData{
	  display: grid;
	  align-items: center;
	  justify-items:center;
	  grid-template-columns: 1fr 1fr;
	  grid-template-rows: 1fr;
	  width: 70%;
	  height: auto;
	  margin:0 auto;
	  &>div{
		span{
			display:flex;
			gap:0 30px;
				a{
					text-decoration: none;
					color:white;
				}
			}
	  }
  }
&>p{
	text-align: center;
}


@media (max-width:1400px){
   
};
@media (max-width:1200px){
    
};
@media (max-width:900px){
	
};
@media (max-width:570px){
	height:150px;
	p{
	 font-size: 14px;
    };
    #perfilData{
		width: 90%;	
		&>div{
			h3{
				font-size: 10px;
			}
			h2{
				font-size: 10px;
			}
			p{
				font-size:10px;
			}
			span{
				a{
				   font-size:16px
				}
			}
		}
	}

};
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

	const handleSubmit = async (e) => {
		e.preventDefault()

		let resp = await emailjs.sendForm(VITE_APP_SERVICE_ID, VITE_APP_TEMPLATE_ID, form.current, VITE_APP_PUBLIC_KEY)
		alert(resp)
		setData({ name: "", issue: "", message: "", reply_to: "" })
	}



	return (<Section id="contact">
		<ToastContainer
			position="top-right"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
		/>
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
			<FooterSection>
				<div id="perfilData">
					<div>
						<h3>Kevin Sebastian De jesus</h3>
						<h2>INFO</h2>
						<p><HiLocationMarker /> Resistencia,Chaco,Argentina</p>
						<p><FaPhoneSquareAlt />+5493624315169</p>
						<span><a href='https://www.linkedin.com/in/kevin-sebastian-de-jesus/' target={'_blank'}><RiLinkedinBoxFill /></a><a href='https://github.com/KevinSDJ' target={'_blank'}><RiGithubFill /></a></span>
					</div>
					<div>
						<Perfil />
					</div>
				</div>
				<p>copry </p>
			</FooterSection>
		</FlexLayout>
	</Section>)
}