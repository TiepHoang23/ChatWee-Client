import InboxItem from "./InboxItem";
import InputComponent from "./InputComponent";

const InboxesList = () => {
    return (
        <div className="w-full flex flex-col h-fit sm:h-full sm:w-2/5 inboxes-list-width sm:p-5">
            <div className="bg-custom-black-3 w-full flex flex-col overflow-hidden p-2 pt-5 sm:rounded-2xl">
                <InputComponent styling="bg-custom-black-2 rounded-full border-0 p-2 w-full mb-2" placeholder="Search chat..." />

                <div className="flex sm:flex-col h-fit overflow-x-scroll sm:overflow-y-scroll sm:overflow-x-hidden">
                    <InboxItem inboxName="User 1" />
                    <InboxItem inboxName="User 1" />
                    <InboxItem inboxName="User 1" />
                    <InboxItem inboxName="User 1" />
                    <InboxItem inboxName="User 1" />
                    <InboxItem inboxName="User 1" />
                    <InboxItem inboxName="User 1" />
                    <InboxItem inboxName="User 2" />
                    <InboxItem inboxName="User 3" />
                    <InboxItem inboxName="User 4" />
                    <InboxItem inboxName="User 5" />
                </div>
            </div>
        </div>
    );
}

export default InboxesList;