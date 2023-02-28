import MessageItem from "./MessageItem";

const MessageDisplayZone = () => {
    return (
        <div className="bg-custom-black-3 w-full h-full flex flex-col overflow-y-scroll p-4">
            <div className="bg-transparent w-full">
                <MessageItem from="true" />
                <MessageItem from="true" />
                <MessageItem from="true" />
                <MessageItem from="false" />
                <MessageItem from="true" />
                <MessageItem from="false" />
                <MessageItem from="true" />
                <MessageItem from="true" />
                <MessageItem from="false" />
                <MessageItem from="true" />
            </div>
        </div>
    );
}

export default MessageDisplayZone;