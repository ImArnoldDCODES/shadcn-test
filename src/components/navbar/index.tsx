import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import UserPopup from "@/popups/user";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [popup, setPopup] = useState(false);
  return (
    <main className="h-20 flex items-center space-between">
      {popup && <UserPopup setPopup={setPopup} />}
      <div className="w-full flex items-center gap-5 pl-5 md:pl-12">
        <Image
          src="/icon/hamburger.svg"
          alt="hamburger"
          width={25}
          height={25}
          className="block sm:hidden"
        />
        <Image
          src="/logo.svg"
          alt="logo"
          width={60}
          height={60}
          className="hidden sm:block"
        />
        <Image
          src="/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="block sm:hidden"
        />
        <div className="ml-[12%] sm:ml-0 border-2 rounded-3xl sm:ml-0 flex cursor-pointer items-center py-1 px-2">
          <div className="">
            <Avatar>
              <AvatarImage src="/picture/Avatar.svg" alt="@avater" />
              <AvatarFallback>KV</AvatarFallback>
            </Avatar>
          </div>
          <h4 className="m-auto w-fit">Keshav</h4>
          <Image
            src="/icon/arrow-down-s-line.svg"
            alt="arrow-down"
            width={20}
            height={20}
            onClick={() => setPopup(!popup)}
          />
        </div>
      </div>
      <div className="w-full hidden sm:block lg:pr-0 pr-10">
        <ul className="text-lg flex justify-between cursor-pointer">
          <li className="hover:font-medium">Dashboard</li>
          <li className="hover:font-medium">Messages</li>
          <li className="hover:font-medium">Campaigns</li>
          <li className="hover:font-medium">Studio</li>
        </ul>
      </div>
      <div className="w-full gap-5 justify-center cursor-pointer lg:flex hidden">
        <Image
          src="/icon/notification.svg"
          alt="notification-icon"
          width={25}
          height={25}
        />
        <Image src="/icon/gift-box.svg" alt="giftbox" width={22} height={22} />
        <Input type="text" placeholder="Search..." className="w-[14rem]" />
      </div>
      <Image
        src="/icon/search.svg"
        alt="search-icon"
        width={30}
        height={30}
        className="block sm:hidden mr-4 ml-4"
      />
    </main>
  );
}
