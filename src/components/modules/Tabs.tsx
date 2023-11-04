"use client";

// libraries
import {useRef} from "react";
import {CSSTransition} from 'react-transition-group';

// components
import {Button} from "@/components/modules/Button";

export const TabItem = ({tabItem, activeTab, setActiveTab}) => {

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
                    document.getElementById(`tabs`).scrollLeft = (document.getElementById(`tab-${tabItem.value}`)?.offsetLeft - document.getElementById(`tab-${tabItem.value}`)?.offsetWidth);
                }}
            >
                {tabItem?.title}
            </Button>
        </li>
    )
}


export const TabList = ({children}) => {

    return (
        <ul
            id="tabs"
            className="flex flex-row justify-start items-center gap-x-2 w-full overflow-x-scroll remove-scrollbar scroll-smooth"
        >
            {children}
        </ul>
    )
}

export const TabPanel = ({children, activeTab}) => {

    const nodeRef = useRef(null);

    return (
        <div className={`${activeTab ? 'flex' : 'hidden'} w-full h-full`}>

            <CSSTransition
                nodeRef={nodeRef}
                in={activeTab}
                timeout={300}
                classNames="fade-in"
                mountOnEnter
                unmountOnExit
            >

                <div
                    className="flex flex-col justify-start items-start gap-y-4 w-full h-full"
                    ref={nodeRef}
                >
                    {children}
                </div>

            </CSSTransition>

        </div>
    )
}

export const Tabs = ({children}) => {

    return (
        <div className="flex flex-col gap-y-4 justify-start items-start w-full h-full">
            {children}
        </div>
    )
}