// libraries
import {Accordion as ReactAccordion, AccordionItem as ReactAccordionItem} from '@szhsin/react-accordion';
import {LuChevronDown} from "react-icons/lu";

// styles
import "@/styles/libraries/react-accordion.scss";

export const Accordion = ({children}) => {

    return (
        <div className="flex justify-center items-center w-full">

            <ReactAccordion
                allowMultiple
                mountOnEnter
                unmountOnExit
            >
                {children}
            </ReactAccordion>

        </div>
    )
}

export const AccordionItem = ({children , header , isInitialOpen}) => {

    return (
        <ReactAccordionItem
            initialEntered={isInitialOpen}
            header={({ state: { isEnter } }) => (
                <div className="flex justify-between items-center gap-x-4 w-full">

                    <span className='text-gray text-sm font-bold'>
                        {header}
                    </span>

                    <LuChevronDown
                        size={20}
                        className="text-gray"
                    />

                </div>
            )}
        >

            {children}

        </ReactAccordionItem>
    )
}