const TopBar = () => {
    return (
        <div className="bg-red-200 flex justify-center p-2">
            <div className="container bg-gray-200">
                <input type="text" className="rounded-lg p-2" placeholder="Search for people..."></input>
            </div>
        </div>
    );
}

export default TopBar;