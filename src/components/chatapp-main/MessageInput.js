import { faFaceSmile, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputComponent from "./InputComponent";

const MessageInput = () => {
    return (
        <div className="bg-custom-black-3 flex p-2">
            <InputComponent placeholder="Aa..." styling="rounded-full w-full p-2 border-0 bg-black" />
            <div className="rounded-full h-8 w-8 bg-custom-yellow place-self-center flex justify-center ml-2 duration-150 hover:brightness-90 cursor-pointer">
                <FontAwesomeIcon icon={faFaceSmile} className="bg-transparent place-self-center" />
            </div>
            <div className="rounded-full h-8 w-8 bg-custom-yellow place-self-center flex justify-center ml-2 duration-150 hover:brightness-90 cursor-pointer">
                <FontAwesomeIcon icon={faPaperPlane} className="bg-transparent place-self-center" />
            </div>
        </div>
    );
}

export default MessageInput;