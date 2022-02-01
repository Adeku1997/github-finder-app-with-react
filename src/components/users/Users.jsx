import React, { useContext } from "react";
import styled from "styled-components";
import UserItem from "./UserItem";
import Spinner from "../spinner/Spinner";
import GithubContext from "../../context/github/githubContext";


const Users=()=> {
  const githubContext =useContext(GithubContext)
  if (githubContext.loading) {
    <Spinner/>
  }
   return (
    <Container>
      {githubContext.users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </Container>
  );
 
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  width:80%;
  margin:20px auto;
`;
export default Users;
