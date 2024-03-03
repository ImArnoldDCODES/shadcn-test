import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronRightIcon } from "@radix-ui/react-icons";

import React, { useEffect, useRef } from "react";

interface UserPopupProps {
  setPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const selectOption = [
  {
    title: "Canyon mode",
  },
  {
    title: "Templates",
  },
  {
    title: "Settings",
  },
];

const workspaceOption = [
  {
    title: "Circle Inc.",
  },
  {
    title: "Ashoka Inc.",
  },
  {
    title: "Soil Inc.",
  },
];

const UserPopup: React.FC<UserPopupProps> = ({ setPopup }) => {
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setPopup(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <main
      className="h-[33rem] w-[14rem] bg-white border-2 rounded-lg absolute left-[10%] top-[10%] z-[100] px-1 py-1"
      ref={popupRef}
    >
      <div className="bg-slate-50 h-[fit-content] w-full px-2 pt-3 py-1">
        <Avatar>
          <AvatarImage src="/picture/Avatar.svg" alt="@avater" />
          <AvatarFallback>KV</AvatarFallback>
        </Avatar>
        <h4>Keshav Ketan Saini</h4>
        <h6 className="text-[#17171F99] text-sm">keshav@sixteen.life</h6>
        <hr className="mt-5" />

        <div>
          {selectOption.map((data, index) => (
            <Select key={index}>
              <SelectTrigger className="w-[100%] my-2 cursor-pointer">
                <SelectValue placeholder={data.title} />
              </SelectTrigger>
            </Select>
          ))}
        </div>
      </div>
      <div className="px-2 mt-2">
        <h6 className="text-sm text-[#17171F99]">Other Workspace</h6>
        <div>
          {workspaceOption.map((data, index) => (
            <Select key={index}>
              <SelectTrigger className="w-[100%] my-2 cursor-pointer">
                <SelectValue placeholder={data.title} />
              </SelectTrigger>
            </Select>
          ))}
        </div>
        <h4 className="flex items-center justify-between mt-3 cursor-pointer">
          Add Account
          <span>
            <ChevronRightIcon className="h-4 w-4" />
          </span>
        </h4>
        <hr className="mt-3" />
        <h4 className="flex items-center justify-between mt-3 cursor-pointer">
          Logout
          <span>
            <ChevronRightIcon className="h-4 w-4" />
          </span>
        </h4>
      </div>
    </main>
  );
};

export default UserPopup;
