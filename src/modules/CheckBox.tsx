// libraries
import {LuCheck} from "react-icons/lu";

// types
import {CheckBoxType} from "@/types/modules";

const CheckBox = ({name, value, checked, onChange}: CheckBoxType) => {

    return (
        <span className={`flex justify-center items-center w-[16px] h-[16px] ${checked ? "bg-blue" : "bg-secondary"} rounded-md transition-colors duration-300 ease-out-expo`}>

            <input
                id={`checkbox-${value}`}
                type="checkbox"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="hidden"
            />

            <span className={`text-light ${checked ? "scale-100" : "scale-0"} transition-transform duration-300 ease-out-expo`}>
                <LuCheck
                    size={12}
                    className="text-current"
                />
            </span>

        </span>
    )
}

export default CheckBox;