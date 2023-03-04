import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SocketContext } from '../../context/socket';
import MessageItem from './MessageItem';

const MessageDisplayZone = () => {

  const socket = useContext(SocketContext);

  const { idRoom } = useParams();
  const [oldMessages, setOldMessages] = useState(null);
  const [MessageReceive, setMessageReceive] = useState([]);
  const [receiveLength, setLength] = useState(0);


  useEffect(() => {
    async function fecthAPI() {
      const res = await axios.get(
        `http://localhost:8000/api/room/message/${idRoom}`,
        {
          headers: {
            authorization: `Bearer ${JSON.parse(localStorage.getItem('data')).token
              }`,
          },
        }
      );
      setOldMessages(res.data.data);
    }


    fecthAPI();
    socket.emit('join-room', idRoom);

    socket.on('join-room', (data) => {
      //console.log(data);
    });

    socket.on('chat-message', (data) => {
      const temp = MessageReceive;
      temp.push(data);

      setMessageReceive(temp);
      setLength(MessageReceive.length);
    });

    socket.on('connect_error', (err) => {
      if (err.message === 'xhr poll error') return;
      console.log(`connect_error :${err.message}`);
    });

    socket.on('handle-error', (error) => {
      console.log(error);
    });

    return () => {
      socket.off('chat-message');
      socket.off('connect_error');
      socket.off('handle-error');
    };
  }, [receiveLength]);

  return (
    <div className='bg-custom-black-3 w-full h-full flex flex-col-reverse overflow-y-scroll p-4' id='scroll'>
      <div className='bg-transparent w-full' id='scroll'>

        {oldMessages && oldMessages.map((item, index) => {
          //console.log(item);
          const userid = JSON.parse(localStorage.getItem('data')).userId;
          let From = 'false';
          if (item.userId === userid) {
            From = 'true';
          }
          return (
            <MessageItem from={From} key={index} content={item.content} />
          );
        })}

        {MessageReceive.map((item, index) => {
          const userid = JSON.parse(localStorage.getItem('data')).userId;
          let From = 'false';
          if (item.userId === userid) {
            From = 'true';
          }
          return (
            <MessageItem from={From} key={index} content={item.msg} />
          );
        })}
      </div>
    </div>
  );
};

export default MessageDisplayZone;
