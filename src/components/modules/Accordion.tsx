// libraries
import {Accordion as ReactAccordion, AccordionItem as ReactAccordionItem} from '@szhsin/react-accordion';
import {LuChevronDown} from "react-icons/lu";

// styles
import "@/styles/customize/@szh-react-accordion.scss";

const ReactAccordionHeader = ({header}) => {

    return (
        <div className="flex justify-between items-center gap-x-4 w-full">

            <span className='text-gray text-sm font-bold'>
                {header}
            </span>

            <LuChevronDown
                size={20}
                className="text-gray"
            />

        </div>
    )
}

export const Accordion = ({children}) => {

    return (
        <ReactAccordion
            allowMultiple
            mountOnEnter
            unmountOnExit
        >
            {children}
        </ReactAccordion>
    )
}

export const AccordionItem = ({children, header, isInitialOpen}) => {

    return (
        <ReactAccordionItem
            initialEntered={isInitialOpen}
            header={<ReactAccordionHeader header={header}/>}
        >
            {children}
        </ReactAccordionItem>
    )
}