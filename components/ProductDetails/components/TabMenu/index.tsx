"use client";

import { useState } from "react";

type TabMenuProps = {
  items: {
    title: string;
    children: React.ReactNode;
  }[];
  defaultSelected?: number;
};
export const TabMenu: React.FC<TabMenuProps> = ({ items, defaultSelected }) => {
  const [selectedTab, setSelectedTab] = useState(defaultSelected ?? 0);
  return (
    <>
      <div className="w-full bg-accent rounded-xl h-[3rem]">
        <div className="flex flex-row gap-5 items-center px-5 h-full">
          {items.map((item, index) => (
            <div
              className={`min-w-48  py-2 px-5 cursor-pointer ${
                selectedTab === index
                  ? "bg-primary text-white rounded-xl"
                  : "text-base"
              }`}
              onClick={() => setSelectedTab(index)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      {items[selectedTab].children}
    </>
  );
};
