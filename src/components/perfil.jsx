import styled from 'styled-components'


const Perfil = styled.div`
padding: 70px;
background:url("https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg");
background-repeat:non-repeat;
background-size:cover;
background-position:center;
border-radius: 90% 90% 90% 90% / 90% 5% 87% 5%;
background-color:#c5fafa;
@media (max-width:1200px){
    padding: 50px;
};
@media (max-width:900px){
	padding: 40px;
};
@media (max-width:570px){
    padding: 30px;
};
`


export { Perfil }