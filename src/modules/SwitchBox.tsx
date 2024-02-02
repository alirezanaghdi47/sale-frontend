// types
import {SwitchBoxType} from "@/types/modules";

const SwitchBox = ({name, value, checked, onChange}: SwitchBoxType) => {

    return (
        <span className={`flex items-center w-[32px] h-[16px] ${checked ? "bg-blue" : "bg-secondary"} rounded-full transition-colors duration-300 ease-out-expo`}>

            <input
                id={`switchbox-${name}`}
                type="checkbox"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="hidden"
            />

            <span
                className={`w-[8px] h-[8px] rounded-full transform ${checked ? "bg-light -translate-x-[20px]" : "bg-gray -translate-x-[4px]"} transition-transform duration-300 ease-out-expo`}/>

        </span>
    )
}

export default SwitchBox;