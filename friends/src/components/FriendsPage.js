import React, { useEffect, useState } from "react";
import * as friendsService from "../services/friends-service";
import FriendsForm from "./FriendsForm";

const FriendsPage = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    const fetchFriends = async () => {
      setFriends(await friendsService.fetchFriends());
    };
    fetchFriends();
  }, []);
  return (
    <div>
      <ul>
        <FriendsForm />
        
        {friends.map((friend) => {
          return <li key={friend.id}>{friend.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default FriendsPage;
