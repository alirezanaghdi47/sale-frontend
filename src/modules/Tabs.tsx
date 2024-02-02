"use client";

// modules
import {Button} from "@/modules/Button";

// types
import {TabsItemType, TabsListType, TabsType} from "@/types/modules";

export const TabItem = ({tabItem, activeTab, setActiveTab}: TabsItemType) => {

    return (
        <li
            className="w-full"
            id={`tab-${tabItem.value}`}
        >
            <Button
                variant={activeTab === tabItem?.value ? "contained" : "text"}
                color={activeTab === tabItem?.value ? "blue" : "gray"}
                size="full"
                startIcon={tabItem?.icon}
                onClick={() => {
                    setActiveTab(tabItem?.value);
                    // @ts-ignore
                    document.getElementById(`tabs`).scrollLeft = (document.getElementById(`tab-${tabItem.value}`)?.offsetLeft - document.getElementById(`tab-${tabItem.value}`)?.offsetWidth);
                }}
            >
                {tabItem?.title}
            </Button>
        </li>
    )
}


export const TabList = ({children}: TabsListType) => {

    return (
        <ul
            id="tabs"
            className="flex flex-row justify-start items-center gap-x-2 w-full overflow-x-scroll remove-scrollbar scroll-smooth"
        >
            {children}
        </ul>
    )
}

export const Tabs = ({children}: TabsType) => {

    return (
        <div className="flex flex-col gap-y-4 justify-start items-start w-full h-full">
            {children}
        </div>
    )
}