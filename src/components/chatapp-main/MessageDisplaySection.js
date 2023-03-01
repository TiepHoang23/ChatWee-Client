import ChatHeader from "./ChatHeader";
import MessageDisplayZone from "./MessageDisplayZone";
import MessageInput from "./MessageInput";

const ChatSection = () => {
    return (
        <div className="w-full h-full flex flex-col sm:p-5 sm:pb-0 bg-transparent overflow-y-hidden">
            <div className="w-full h-full flex flex-col">
                <ChatHeader />
                <MessageDisplayZone />
                <MessageInput />
            </div>
        </div>
    );
}

export default ChatSection;