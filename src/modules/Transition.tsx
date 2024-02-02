// libraries
import {useRef} from "react";
import {CSSTransition} from "react-transition-group";

// types
import {FadeTransitionType} from "@/types/modules";

export const FadeTransition = ({children, active}: FadeTransitionType) => {

    const nodeRef = useRef(null);

    return (
        <div
            className={`${active ? 'flex' : 'hidden'} w-full h-full`}
            ref={nodeRef}
        >

            <CSSTransition
                nodeRef={nodeRef}
                in={active}
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
