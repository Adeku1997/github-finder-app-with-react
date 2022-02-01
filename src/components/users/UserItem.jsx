import React from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';

function UserItem ({user}){
const {avatar_url,html_url,login} = user;
    return (
      <Container>
        <Wrap>
          <img src={avatar_url} alt="img" />
          <h3>{login}</h3>
          <Link to={`/users/${login}`}>More</Link>
        </Wrap>
      </Container>
    );
  
}

const Container = styled.div``;
const Wrap = styled.div`
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom:5px;
  border-radius:6px;

  img {
    border: 1px solid black;
    width: 90px;
    border-radius: 50%;
  }

  a {
      display:inline-block;
      margin-top:5px;
      text-decoration:none;
      padding:5px 7px;
      background:black;
      color:white;
      border-radius:6px;
  }
`;

export default UserItem;
