// libraries
import {Accordion as ReactAccordion, AccordionItem as ReactAccordionItem} from '@szhsin/react-accordion';
import {LuChevronDown} from "react-icons/lu";

// styles
import "@/styles/customize/@szh-react-accordion.scss";

const ReactAccordionHeader = ({header, icon}) => {

    return (
        <div className="flex justify-between items-center gap-x-4 w-full bg-secondary rounded-lg px-4 py-2">

            <div className="flex justify-start items-center gap-x-2">

                {
                    icon && (
                        <span className="text-gray">
                            {icon}
                        </span>
                    )
                }

                <span className='text-gray text-sm font-bold'>
                    {header}
                </span>

            </div>

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
            transition
            transitionTimeout={300}
        >
            {children}
        </ReactAccordion>
    )
}

export const AccordionItem = ({children, header, icon , initialEntered}) => {

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