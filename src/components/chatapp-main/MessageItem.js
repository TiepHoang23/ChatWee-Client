const MessageItem = (props) => {

    const { from } = props;
    const styling = ( from === "true" ) ? "bg-custom-yellow h-fit max-w-sm p-2 rounded-2xl mb-3" : "bg-gray-500 h-fit max-w-sm p-2 rounded-2xl mb-3 ml-auto";

    return (
        <div className={styling}>
            This is a message from user to user is a message from user to user is a message from user to user
        </div>
    );
}

export default MessageItem;