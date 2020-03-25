import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Friend } from "./Friend";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2%;
  justify-content: center;
  align-items: center;
`;

const FriendsList = props => {
  const [friends, setFriends] = useState();
  const [data, setData] = useState({
    id: Date.now(),
    name: "",
    age: "",
    email: ""
  });

  useEffect(() => {
    axiosWithAuth()
      .get("/api/friends")
      .then(res => {
        setFriends(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  console.log("friends data", friends);

  const onChange = e => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/friends", data)
      .then(res => setFriends(res.data))
      .catch(err => console.log(err));
  };

  return (
    <>
      <p>friends component</p>
      <form onSubmit={onSubmit}>
        <label name="name">Name</label>
        <input
          htmlFor="name"
          name="name"
          value={data.name}
          onChange={onChange}
        />
        <label name="age">Age</label>
        <input htmlFor="age" name="age" value={data.age} onChange={onChange} />
        <label name="email">Email</label>
        <input
          htmlFor="email"
          name="email"
          value={data.email}
          onChange={onChange}
        />
        <button>Submit</button>
      </form>
      <Box>
        {friends
          ? friends.map((item, index) => <Friend friend={item} key={index} />)
          : "No friends."}
      </Box>
    </>
  );
};

export default FriendsList;