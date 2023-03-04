import axios from 'axios';
export const getMyFriendAPI = async () => {
  const res = await axios.get('http://localhost:8000/api/user/myfriend', {
    headers: {
      authorization: `Bearer ${JSON.parse(localStorage.getItem('data')).token}`,
    },
  });
  return res.data;
};
export const joinRoomAPI = async (friendId) => {
  const res = await axios.get(
    `http://localhost:8000/api/room/getRoom/${friendId}`,
    {
      headers: {
        authorization: `Bearer ${
          JSON.parse(localStorage.getItem('data')).token
        }`,
      },
    }
  );
  return res.data;
};
