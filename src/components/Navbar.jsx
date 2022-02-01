import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import GitHubIcon from "@mui/icons-material/GitHub";

function Navbar({title}) {
  return (
    <Container>
      <Brand>
        {" "}
        <Logo />
        <span>{title}</span>
      </Brand>

      <Links>
        {" "}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Links>
    </Container>
  );
}

const Container = styled.div`
  height: 70px;
  background: #191919;
  color: #FFFFFF;
  display:flex;
  justify-content:space-between;
  align-Items:center;

`;

const Brand = styled.div`
display:flex;
align-items:center;

 span{
   font-weight:bold;
   font-size:23px;
 }
`

const Logo = styled(GitHubIcon)`

`

const Links = styled.div`
 a {
   text-decoration:none;
   margin-right:10px;
   color:#fff
 }

}
`
export default Navbar;
