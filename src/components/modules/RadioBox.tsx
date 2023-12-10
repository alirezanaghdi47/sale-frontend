// components
import {FaCircle} from "react-icons/fa6";

const RadioBox = ({name, value , checked , onChange}) => {

    return (
        <span className={`flex justify-center items-center w-[16px] h-[16px] ${checked ? "bg-blue" : "bg-secondary"} rounded-full transition-colors duration-300 ease-out-expo`}>

            <input
                id={`radiobox-${value}`}
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={(e) => onChange(e.target.value)}
                className="hidden"
            />

            <span className={`text-light ${checked ? "scale-100" : "scale-0"} transition-transform duration-300 ease-out-expo`}>
                <FaCircle
                    size={8}
                    className="text-current"
                />
            </span>

        </span>
    )
}

export default RadioBox;