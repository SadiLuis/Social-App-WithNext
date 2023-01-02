/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import MenuItems from "./MenuItems";
import { BellIcon, BookmarkIcon, ChatBubbleOvalLeftEllipsisIcon, ClipboardDocumentListIcon, EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon, HashtagIcon, HomeIcon, UserCircleIcon } from '@heroicons/react/24/outline'

export default function Sidebar() {
  return (
    <div>
        {/* Logo */}
        <div className="hoverEffect" >
            <Image 
            width="50" 
            height="50" 
            alt="/" 
            src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"  
        />
        </div>
        {/* Menu */}
        <div className="" >
            <MenuItems text="Home" Icon={HomeIcon} active />
            <MenuItems text="Explore" Icon={HashtagIcon} />
            <MenuItems text="Notifications" Icon={BellIcon} />
            <MenuItems text="Messages" Icon={ChatBubbleOvalLeftEllipsisIcon} />
            <MenuItems text="Save" Icon={BookmarkIcon} />
            <MenuItems text="List" Icon={ClipboardDocumentListIcon} />
            <MenuItems text="Profile" Icon={UserCircleIcon} />
            <MenuItems text="More" Icon={EllipsisHorizontalCircleIcon} />
        </div>

        {/* Button */}

        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>

        {/* Avatar */}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto" >
            <img
            className="h-10 w-10 rounded-full xl:mr-2" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqEV0MV-Z2ukqFR182nIi0Dxb6HGwkmAJr3B46e_NJ7e8yH0z0MlaftwOl4rhJfGXJlo&usqp=CAU"
            alt="user-img" />
            <div className="leading-5 hidden xl:inline" >
                <h4 className="font-bold" > Rueda Sadi </h4>
                <p className="text-gray-500" > @sadi_dev</p>
            </div>
            <EllipsisHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
        </div>
        <button 
        className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline" 
        >
            Sign in  
        </button>
    </div>
  )
}
