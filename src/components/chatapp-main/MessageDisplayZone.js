import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { AuthContext } from '../../context/auth';
import { SocketContext } from '../../context/socket';
import MessageItem from './MessageItem';

const MessageDisplayZone = () => {
  const socket = useContext(SocketContext);

  const { idRoom } = useParams();
  const [oldMessages, setOldMessages] = useState(null);
  const [MessageReceive, setMessageReceive] = useState({});
  //   const [id, setMessageReceive] = useState({});

  useEffect(() => {
    // const socket = ConnectSocket();
    async function fecthAPI() {
      const res = await axios.get(
        `http://localhost:8000/api/room/message/${idRoom}`,
        {
          headers: {
            authorization: `Bearer ${
              JSON.parse(localStorage.getItem('data')).token
            }`,
          },
        }
      );
      //   console.log(res.data);
      setOldMessages(res.data.data);
    }
    fecthAPI();
    socket.emit('join-room', idRoom);
    socket.on('join-room', (data) => {
      console.log(data);
    });
    socket.on('chat-message', (data) => {
      console.log(data);
      setMessageReceive(data);
      console.log(MessageReceive);
    });
    socket.on('connect_error', (err) => {
      if (err.message === 'xhr poll error') return;
      console.log(`connect_error :${err.message}`);
    });
    socket.on('handle-error', (error) => {
      console.log(error);
    });
    // console.log(oldMessages);
    // console.log(res.data);

    return () => {
      socket.off('chat-message');
      socket.off('connect_error');
      socket.off('handle-error');
    };
  }, []);

  return (
    <div className='bg-custom-black-3 w-full h-full flex flex-col overflow-y-scroll p-4'>
      <div className='bg-transparent w-full'>
        {oldMessages &&
          oldMessages.map((item, index) => {
            console.log(item);
            const userid = JSON.parse(localStorage.getItem('data')).userId;
            let From = 'false';
            if (item.userId === userid) {
              From = 'true';
            }
            return (
              //   <div></div>

              <MessageItem from={From} key={index} content={item.content} />
            );
          })}

        {MessageReceive.msg && (
          <MessageItem from='true' content={MessageReceive.msg} />
        )}
      </div>
    </div>
  );
};

export default MessageDisplayZone;
