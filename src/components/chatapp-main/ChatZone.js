import { faInfo, faPhone, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MessageDisplayZone from "./MessageDisplayZone";
import MessageInput from "./MessageInput";

const ChatZone = () => {
    return (
        <div className="sm:w-3/5 w-full flex flex-col">
            <div className="w-full p-3 flex">
                <div className="flex">
                    <img className="rounded-full" alt="" src="https://picsum.photos/50"></img>
                    <h3 className="ml-2 place-self-center">Username</h3>
                </div>

                <div className="ml-auto flex">
                    <div className="rounded-full h-8 w-8 bg-orange-400 place-self-center flex justify-center duration-150 hover:brightness-90 cursor-pointer">
                        <FontAwesomeIcon icon={faPhone} className="bg-transparent place-self-center" />
                    </div>
                    <div className="rounded-full h-8 w-8 bg-orange-400 place-self-center flex justify-center duration-150 hover:brightness-90 cursor-pointer ml-2">
                        <FontAwesomeIcon icon={faVideo} className="bg-transparent place-self-center" />
                    </div>
                    <div className="rounded-full h-8 w-8 bg-orange-400 place-self-center flex justify-center duration-150 hover:brightness-90 cursor-pointer ml-2">
                        <FontAwesomeIcon icon={faInfo} className="bg-transparent place-self-center" />
                    </div>
                </div>
            </div>

            <MessageDisplayZone />

            <MessageInput />
        </div>
    );
}

export default ChatZone;