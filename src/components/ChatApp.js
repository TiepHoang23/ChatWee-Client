import AllInboxZone from "./AllInboxZone"
import ChatZone from "./ChatZone"
import InformationZone from "./InformationZone"
import TopBar from "./TopBar"

const ChatApp = () => {
    return (
        <div className="h-screen flex flex-col">
            <TopBar />
            <div className="flex w-screen h-full overflow-hidden">
                <AllInboxZone />
                <ChatZone />
                <InformationZone />
            </div>
        </div>
    );
}

export default ChatApp;