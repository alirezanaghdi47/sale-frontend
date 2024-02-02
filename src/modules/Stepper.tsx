"use client";

// types
import {StepperItemType, StepperType} from "@/types/modules";

const styles = {
    count: {
        2: "grid-cols-2",
        3: "grid-cols-3",
        4: "grid-cols-4",
        5: "grid-cols-5",
    }
}

const StepperItem = ({stepItem, step}: StepperItemType) => {

    return (
        <li className="grid-cols-1 flex flex-col justify-center items-center gap-y-2">

            <span className={`flex justify-center items-center w-[40px] h-[40px] ${stepItem?.number === step ? 'bg-blue text-light' : 'bg-light text-dark'} text-base font-bold rounded-full  transition-colors duration-300 ease-out-expo`}>
                {stepItem?.number}
            </span>

            <span className={`text-xs ${stepItem?.number === step ? 'text-blue' : 'text-gray'}`}>
                {stepItem?.title}
            </span>

        </li>
    )
}

const Stepper = ({step, stepList}: StepperType) => {

    return (
        // @ts-ignore
        <ul className={`grid ${styles.count[stepList?.length]} justify-start items-center w-full overflow-x-scroll remove-scrollbar`}>

            {
                // @ts-ignore
                stepList.map((stepItem, index) =>
                    <StepperItem
                        key={stepItem.id}
                        stepItem={{...stepItem, number: index + 1}}
                        step={step}
                    />
                )
            }

        </ul>
    )
}

export default Stepper;