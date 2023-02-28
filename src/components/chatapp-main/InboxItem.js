const InboxItem = (props) => {

    const { inboxName } = props;

    return (
        <div className="rounded-lg cursor-pointer p-2 hover:bg-gray-700 duration-150 flex">
            <img className="rounded-full inline-block" alt="" src="https://picsum.photos/64"></img>
            <div className="ml-2 w-inbox-name h-full w-full place-self-center bg-transparent">
                <h3 className="bg-transparent">{inboxName}</h3>
                <p className="bg-transparent">3m ago: Last message</p>
            </div>
        </div>
    );
}

export default InboxItem;