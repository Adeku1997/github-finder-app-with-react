import React from 'react';
import styled from 'styled-components';

const RepoItem = ({repo}) => {
  return <RepoContainer>
      <h3>
          <a href={repo.html_url}>{repo.name}</a>
      </h3>
  </RepoContainer>;
};


const RepoContainer = styled.div`
border:2px solid black;
width:80%;
margin:10px auto;
height:50px;
display:flex;
align-items:center;
  a {
    text-decoration:none;
    color:black;
  }
`
export default RepoItem;
