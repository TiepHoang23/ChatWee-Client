import InboxesList from "./InboxesList";
import MessageDisplaySection from "./MessageDisplaySection";

const AppBody = () => {
    return(
        <div className="h-full w-full flex flex-col sm:flex-row sm:h-screen overflow-y-hidden">
            <InboxesList />
            <MessageDisplaySection />
        </div>
    );
}

export default AppBody;