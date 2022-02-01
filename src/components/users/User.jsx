import React, { useEffect, useContext, Fragment } from "react";
import Spinner from "../spinner/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import CheckIcon from "@mui/icons-material/Check";
import DangerousIcon from "@mui/icons-material/Dangerous";
import GithubContext from "../../context/github/githubContext";

import styled from "styled-components";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { getUser, loading, user, repos, getUserRepo } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepo(match.params.login);
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    <Spinner />;
  }
  return (
    <Fragment>
      <TopContainer>
        <Link to="/">Back To Search</Link>
        Hireable:
        {hireable ? <CheckIcon /> : <DangerousIcon />}
      </TopContainer>

      <CardContainer>
        <Details>
          <img src={avatar_url} alt="" />
          <h3>{name}</h3>
          <p>Location:{location}</p>
        </Details>

        <BioContainer>
          {bio && (
            <Bio>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Bio>
          )}
          <VisitLink>
            {" "}
            <a href={html_url}>Visit Github Profile</a>
          </VisitLink>
        </BioContainer>
      </CardContainer>
      <BadgeContainer>
        <Followers>Followers:{followers}</Followers>
        <Following>Following:{following}</Following>
        <PublicRepos>Public Repos:{public_repos}</PublicRepos>
        <PublicGists>Public Gists:{public_gists}</PublicGists>
      </BadgeContainer>
      <Repos repos={repos} />
    </Fragment>
  );
};


const TopContainer=styled.div`
height:40px;
display:flex;
align-items:center;
 a{
     text-decoration:none;
     border:1px solid black;
     padding:4px;
     margin:5px;
     color:white;
     border-radius:4px;
     background:grey
 }

`

const CardContainer = styled.div`
  width: 80%;
  height: 215px;
  margin: 10px auto;
  display: flex;
  border: 2px solid black;

  img {
    width: 150px;
    border: 1px solid black;
    border-radius: 50px;
  }
`;
const Details = styled.div`
  margin-right: 30px;
`;

const BioContainer = styled.div`
  margin-top:10px;
  text-align:center;
`;

const Bio = styled.div`
  margin-bottom: 20px;
`;

const VisitLink = styled.a`
  a {
    text-decoration: none;
    border-radius: 6px;
    background: black;
    color: white;
    padding: 5px;
    margin-left: 20px;

  }
`;

const BadgeContainer = styled.div`
border:2px solid black;
width:80%;
margin:10px auto;
height:60px;
display:flex;
align-items:center;
justify-content:center;
`
const Followers = styled.a`
border:1px solid red;
margin-right:15px;
color:white;
background:red;
padding:3px;
border-radius:3px;

`
const Following = styled.a`
  border: 1px solid green;
  margin-right: 15px;
  color: white;
  background: green;
  padding: 3px;
  border-radius: 3px;
`;

const PublicRepos = styled.a`
  border: 1px solid black;
  margin-right: 15px;
  color: black;
  background: white;
  padding: 3px;
  border-radius: 3px;
`;

const PublicGists = styled.a`
  border: 1px solid black;
  margin-right: 15px;
  color: white;
  background: black;
  padding: 3px;
  border-radius: 3px;
`;

export default User;
