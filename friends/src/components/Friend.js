import React from "react";
import styled from "styled-components";

const Box = styled.div`
  border: solid black 1px;
  width: 25%;
  height: 25vh;
  padding: 2%;
`;

export const Friend = props => {
  return (
    <Box>
      <p>ID: {props.friend.id}</p>
      <p>Name: {props.friend.name}</p>
      <p>Age: {props.friend.age}</p>
      <p>Email: {props.friend.email}</p>
    </Box>
  );
};
