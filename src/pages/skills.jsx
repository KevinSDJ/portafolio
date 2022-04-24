import {Section,GridLayout,Content} from "./../components/containers/containers.js";
import styled from 'styled-components';
import {FaReact,FaCss3,FaHtml5,FaDocker} from 'react-icons/fa';
import {FaNodeJs} from 'react-icons/fa';
import {SiPostgresql,SiSequelize,SiRedux,SiJavascript,SiMaterialui,SiSass,SiGit} from 'react-icons/si'


let technicalSkills=[{
	name:"Html",
	icon:<FaHtml5/>,
	color:"#dc2f02"
},{
	name:"Css",
	icon:<FaCss3/>,
	color:"#4cc9f0"
},{
	name:"JavaScript",
	icon:<SiJavascript/>,
	color:"yellow"
},{
	name:"Sass",
	icon:<SiSass/>,
	color:"#f15bb5"
},{
	name:"Mui",
	icon:<SiMaterialui/>,
	color:"#4cc9f0"
},{
	name:"Reactjs",
	icon:<FaReact/>,
	color:"cyan"
},{
	name:"Redux",
	icon:<SiRedux/>,
	color:"violet"
},{
	name:"Nodejs",
	icon:<FaNodeJs/>,
	color:"#70e000"
},{
	name:"PostgreSQL",
	icon:<SiPostgresql/>,
	color:"#00afb9"
},{
	name:"Sequelize",
	icon:<SiSequelize/>,
	color:"#4cc9f0"
},{
	name:"Docker",
	icon:<FaDocker/>,
	color:"#669bbc"
},{
	name:"Git",
	icon:<SiGit/>,
	color:"#dc2f02"
}
]

let softSkills=["Problem-solving ","Critical thinking","Communication","Self-learning","Accountability","Emotional intelligence","Teamwork","Open-Minded"]

const Item= styled.button`
    display:flex;
    flex-direction:column;
    align-items:center;
    color:white;
    text-align:center ;
    background-color:transparent;
    border-radius:4px;
    cursor:pointer;
	@media (max-width:2400px){
		svg{
			font-size:calc(3vw);
		}
		p{
			font-size:20px;
		}
	};
	@media (max-width:1800px){
		svg{
			font-size:calc(3vw);
		}
		p{
			font-size:20px;
		}
	};
	@media (max-width:1200px){
		svg{
			font-size:calc(3vw);
		}
		p{
			font-size:20px;
		}
	};
	@media (max-width:900px){
		svg{
			font-size:calc(6vw);
		}
		p{
			font-size:20px;
		}
	};
	@media (max-width:570px){
		svg{
			font-size:28px;
		}
		p{
			font-size:14px;
		}
	};
    &>svg{
    	&:hover{
    		color:${props=>props.color? props.color:"blue"};
    	}
    }
    &>p{
    	margin:5px 0;
    }
`

const ItemsCont = styled.div`
   width:90%;
   display:flex;
   justify-content:center;
   gap:calc(1vw);
   flex-wrap:wrap;

`
export default function Skills() {
	return (
		<Section id="skills">
		  <GridLayout>
		   <Content>
		   	<h2>technical skills</h2>
		   	<ItemsCont>
		   		{technicalSkills.map((e,i)=><Item key={e.name+i} color={e.color} >{e.icon}<p>{e.name}</p></Item>)}
		   	</ItemsCont>
		   </Content>
		   <Content>
		    <h2>soft skills</h2>
		    <ItemsCont>
		      {softSkills.map((e,i)=><Item key={e+i}><p>{e}</p></Item>)}
		    </ItemsCont>
		   </Content>
		  </GridLayout>
		</Section>
	);
}
