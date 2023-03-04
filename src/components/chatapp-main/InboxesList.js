import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyFriendAPI, joinRoomAPI } from '../../api/QueryAPI';
import InboxItem from './InboxItem';
// import InputComponent from './InputComponent';

const InboxesList = () => {
  const navigate = useNavigate();
  const [myfriend, setMyfriend] = useState(null);
  useEffect(() => {
    const fecthAPIFriend = async () => {
      const res = await getMyFriendAPI();
      if (res.status) {
        setMyfriend(res.data);
      }
    };
    fecthAPIFriend();
  }, []);
  async function handleOnclick(friendId) {
    const res = await joinRoomAPI(friendId);
    if (res.status) {
      navigate(`/chat/${res.data.id}`);
    }
  }
  return (
    <div className='w-full flex flex-col h-fit sm:h-full sm:w-2/5 inboxes-list-width sm:p-5'>
      <div className='bg-custom-black-3 w-full flex flex-col overflow-hidden p-2 pt-5 sm:rounded-2xl'>
        {/* <InputComponent styling="bg-custom-black-2 rounded-full border-0 p-2 w-full mb-2" placeholder="Search chat..." /> */}

        <div className='flex sm:flex-col h-fit overflow-x-scroll sm:overflow-y-scroll sm:overflow-x-hidden'>
          {myfriend &&
            myfriend.map((item, index) => {
              const fullName = `${item.firstname} ${item.lastname}`;
              return (
                <InboxItem
                  inboxName={fullName}
                  key={index}
                  onClick={() => handleOnclick(item.id)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default InboxesList;
