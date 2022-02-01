import React from 'react';
import RepoItem from './RepoItem';
import styled from 'styled-components';

const Repos = ({repos}) => {
  return (
    <Container>
      <RepoTitle>
        <h2>Repos</h2>
      </RepoTitle>

      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </Container>
  );
};


const Container = styled.div``

const RepoTitle = styled.div`
width:80%;
margin:0 auto;
text-align:center;
`
export default Repos;
