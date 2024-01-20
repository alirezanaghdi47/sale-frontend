// libraries
import {Accordion as ReactAccordion, AccordionItem as ReactAccordionItem} from '@szhsin/react-accordion';
import {LuChevronDown} from "react-icons/lu";

// components
import {Button} from "@/components/modules/Button";

// styles
import "@/styles/customize/@szh-react-accordion.scss";

const ReactCollapseHeader = ({button}) => {

    return (
        <div className="flex justify-between items-center gap-x-4 w-full">

            <Button
                as="span"
                variant={button?.variant}
                color={button?.color}
                size={button?.size}
                justify={button?.justify}
                startIcon={button?.startIcon}
            >
                {button?.children}
            </Button>

            <LuChevronDown
                size={16}
                className="text-gray"
            />

        </div>
    )
}

export const Collapse = ({children}) => {

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

export const CollapseItem = ({children, button , initialEntered}) => {

    return (
        <ReactAccordionItem
            initialEntered={initialEntered}
            header={<ReactCollapseHeader button={button}/>}
            panelProps={{datatype:"collapse"}}
        >
            {children}
        </ReactAccordionItem>
    )
}