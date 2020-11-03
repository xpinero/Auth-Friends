import React, { useState } from "react";
// import * as authService from '../services/auth-service';
// import{ useHistory } from 'react-router-dom';

const FriendsForm = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");

  const newFriend = async (e) => {
    e.preventDefault();
    console.log("friend");
    // await authService.login(userName, passWord);
    // history.push('/friends');
  };

  return (
    <div>
      <form onSubmit={newFriend}>
        <label for="name-input">Name</label>
        <input
          id="name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label for="age-input">Age</label>
        <input
          id="age-input"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          type="number"
        />
        <br />
        <label for="email-input">Email</label>
        <input
          id="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <button>Add new friend</button>
      </form>
    </div>
  );
};

export default FriendsForm;
