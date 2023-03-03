import { faFaceSmile, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useState } from 'react';
import { SocketContext } from '../../context/socket';
// import InputComponent from './InputComponent';

const MessageInput = () => {
  const socket = useContext(SocketContext);
  const [message, setMessage] = useState('');
  const handleSendMessage = () => {
    socket.emit('chat-message', { msg: message });
  };
  return (
    <div className='bg-custom-black-3 flex p-2'>
      <input
        className='rounded-full w-full p-2 border-0 bg-black'
        placeholder='Aa..'
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <div className='rounded-full h-8 w-8 bg-custom-yellow place-self-center flex justify-center ml-2 duration-150 hover:brightness-90 cursor-pointer'>
        <FontAwesomeIcon
          icon={faFaceSmile}
          className='bg-transparent place-self-center'
        />
      </div>
      <div
        className='rounded-full h-8 w-8 bg-custom-yellow place-self-center flex justify-center ml-2 duration-150 hover:brightness-90 cursor-pointer'
        onClick={handleSendMessage}
      >
        <FontAwesomeIcon
          icon={faPaperPlane}
          className='bg-transparent place-self-center'
        />
      </div>
    </div>
  );
};

export default MessageInput;
