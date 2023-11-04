// libraries
import {LuCheck} from "react-icons/lu";

const CheckBox = ({name, value, checked, onChange}) => {

    return (
        <span className={`flex justify-center items-center w-[20px] h-[20px] ${checked ? "bg-blue" : "bg-secondary"} rounded-lg transition-colors duration-300 ease-out-expo`}>

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
                <LuCheck size={16}/>
            </span>

        </span>
    )
}

export default CheckBox;