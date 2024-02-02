// libraries
import React from "react";
import {Accordion as ReactAccordion, AccordionItem as ReactAccordionItem} from '@szhsin/react-accordion';
import {LuChevronDown} from "react-icons/lu";

// styles
import "@/styles/customize/@szh-react-accordion.scss";

// types
import {AccordionItemType, AccordionType} from "@/types/modules";

const ReactAccordionHeader = ({header, icon}: {header: string , icon: React.ReactNode}) => {

    return (
        <div className="flex justify-between items-center gap-x-4 w-full bg-secondary rounded-lg px-4 py-2">

            <div className="flex justify-start items-center gap-x-2">

                {icon}

                <span className='text-gray text-xs font-bold'>
                    {header}
                </span>

            </div>

            <LuChevronDown
                size={16}
                className="text-gray"
            />

        </div>
    )
}

export const Accordion = ({children}: AccordionType) => {

    return (
        <ReactAccordion
            allowMultiple
            mountOnEnter
            unmountOnExit
            transition
            transitionTimeout={300}
        >
            {children}
        </ReactAccordion>
    )
}

export const AccordionItem = ({children, header, icon , initialEntered}: AccordionItemType) => {

    return (
        <ReactAccordionItem
            initialEntered={initialEntered}
            header={
                <ReactAccordionHeader
                    icon={icon}
                    header={header}
                />
            }
            panelProps={{datatype:"accordion"}}
        >
            {children}
        </ReactAccordionItem>
    )
}