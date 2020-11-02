import axios from "axios";

export const fetchFriends = async () => {
  const url = "http://localhost:5000/api/friends";
  const token = localStorage.getItem("token");
  const res = await axios.get(url, {
    headers: {
      Authorization: token,
    },
  });
  console.log(res.data);
  return res.data
};
