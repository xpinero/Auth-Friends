import React, { useEffect, useState } from 'react';
import * as friendsService from '../services/friends-service';

const FriendsPage = () => {
  const [friends, setFriends] = useState([]) 
  useEffect(() => {
    const fetchFriends = async () => {
      setFriends (await friendsService.fetchFriends())
    }
    fetchFriends()
  },[])
  return (
    <div>
      <ul>
        {friends.map(friend => {
          return <li>{friend.name}</li>
        })}
      </ul>
    </div>
  )
};

export default FriendsPage;