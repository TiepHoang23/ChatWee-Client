import InboxItem from "./InboxItem";
import SearchInput from "./UserInput";

const AllInboxZone = () => {


    const inboxesList = ['UserA', 'UserB', 'UserC', 'UserD', 'UserE', 'UserF', 'UserG', 'UserH', 'UserI', 'UserJ'];


    return (
        <div className="h-full p-2 w-inbox-zone flex flex-col">
            <h2 className="text-2xl font-bold mb-3">Chat</h2>

            <SearchInput styling="rounded-full w-full p-2 mb-2 border-0 bg-gray-700" placeholder="Search your inbox" />

            <div>
                <button className="bg-gray-500 rounded-full p-2">Friends</button>
                <button className="bg-gray-500 rounded-full p-2 m-groups-button">Groups</button>
            </div>

            <div className="h-full overflow-y-scroll">
                {inboxesList.map(inbox => (
                    <InboxItem inboxName={inbox} />
                ))}
            </div>
        </div>
    );
}

export default AllInboxZone;