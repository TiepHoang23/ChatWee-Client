import { faInfo, faPhone, faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ChatHeader = () => {
    return (
        <div className="w-full p-3 flex bg-black sm:rounded-t-2xl">
            <div className="flex">
                <img className="rounded-full" alt="" src="https://picsum.photos/50"></img>
                <h3 className="ml-2 place-self-center font-bold">Username</h3>
            </div>

            <div className="ml-auto flex">
                <div className="rounded-full h-8 w-8 bg-custom-yellow place-self-center flex justify-center duration-150 hover:brightness-90 cursor-pointer">
                    <FontAwesomeIcon icon={faPhone} className="bg-transparent place-self-center" />
                </div>
                <div className="rounded-full h-8 w-8 bg-custom-yellow place-self-center flex justify-center duration-150 hover:brightness-90 cursor-pointer ml-2">
                    <FontAwesomeIcon icon={faVideo} className="bg-transparent place-self-center" />
                </div>
                <div className="rounded-full h-8 w-8 bg-custom-yellow place-self-center flex justify-center duration-150 hover:brightness-90 cursor-pointer ml-2">
                    <FontAwesomeIcon icon={faInfo} className="bg-transparent place-self-center" />
                </div>
            </div>
        </div>
    );
}

export default ChatHeader;