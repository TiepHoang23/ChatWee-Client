import SearchInput from "./UserInput";

const TopBar = () => {

    return (
        <div className="border-grey-600 border-b-2 w-full h-fit flex py-2 px-2 sm:px-5">
            <SearchInput styling="rounded-full w-1/2 sm:w-2/5 lg:w-1/4 min-width-220 pl-3 border-0 bg-gray-700" placeholder="Search for people" />

            <img className="rounded-full cursor-pointer hover:brightness-110 duration-150 ml-auto" alt="" src="https://picsum.photos/50"></img>
        </div>
    );
}

export default TopBar;

/*
<div className="bg-gray-400 h-18 w-100">
                <input type="text" className="rounded-full p-2 " placeholder="Search for people..."></input>


                <div className="bg-blue-500 h-full float-right flex">
                    <button className="bg-green-200 h-full aspect-square block" onClick={() => { setToggleSetting(!toggleSetting) }}></button>
                </div>

            </div>
*/