import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";
import styled from "styled-components";

function Search() {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("please enter something");
    } else {
      githubContext.handleSearch(text);
      setText("");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <InputForm>
          <input
            type="text"
            placeholder="search users"
            value={text}
            onChange={handleChange}
          />
        </InputForm>
        <InputButton>
          {" "}
          <input type="submit" value="search" />
        </InputButton>
      </form>
      {githubContext.users.length > 0 && (
        <ClearButton>
          <button onClick={githubContext.clearUsers}>clear</button>
        </ClearButton>
      )}
    </Container>
  );
}

const Container = styled.div`
width:80%;
margin:10px auto;
 
  form{
    display:flex;
    justify-content:center;
    width:80%;
    height:40px; 
    
  }
 

}
`;
const InputForm = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 40px;
    border: 2px solid black;
    width: 100%;
    border-radius: 8px;
    mar
  }
`;

const InputButton = styled.div`
  input {
    padding: 9px 8px;
    border-radius: 8px;
    margin-left: 6px;
  }

  input:hover {
    cursor: pointer;
    background: white;
  }
`;
const ClearButton = styled.span`
  button {
    border: 1px solid black;
    padding: 8px 12px;
    background: grey;
    color: white;
    border-radius: 4px;
  }
  button:hover {
    background: white;
    color: black;
    cursor: pointer;
  }
`;
export default Search;
