import Logo from "./../../public/assets/Myproject.svg";
import styled from "styled-components";

const IconLogo = styled.div`
  position: fixed;
  top: calc(5vh);
  left: calc(10vw);
  width: calc(5vw);
  height: calc(5vh);
  z-index:4;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-size: contain;
`;

export default function LogoIcon() {
  return <IconLogo />;
}
