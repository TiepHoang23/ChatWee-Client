import AppBody from './AppBody';
import NavBar from './NavBar';
import './styling.css';

const ChatApp = () => {
    return (
        <div className="h-screen w-full flex flex-col sm:flex-row-reverse bg-custom-black-1">
            <AppBody />
            <NavBar />
        </div>
    );
}

export default ChatApp;