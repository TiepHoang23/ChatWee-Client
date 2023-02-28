const InboxItem = (props) => {

    const { inboxName } = props;

    return (
        <div className="rounded-lg cursor-pointer p-2 hover:bg-gray-700 duration-150 flex justify-center">
            <img className="inbox-img rounded-full" alt="" src="https://picsum.photos/64"></img>
            <div className="ml-2 w-inbox-name h-full w-full bg-transparent md:block hidden">
                <h3 className="bg-transparent">{inboxName}</h3>
                <p className="bg-transparent">3m ago:<span className="bg-transparent hidden lg:inline-block">Last message</span></p>
            </div>
        </div>
    );
}

export default InboxItem;