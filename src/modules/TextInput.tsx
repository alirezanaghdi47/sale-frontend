// types
import {TextInputType} from "@/types/modules";

const TextInput = ({name, value, onChange, placeholder, disabled, startIcon, endIcon, readOnly}: TextInputType) => {

    return (
        <label
            htmlFor={`input-${name}`}
            className="flex justify-center items-center gap-x-2 w-full h-[32px] bg-secondary rounded-lg px-4 py-2"
        >

            {startIcon}

            <input
                id={`input-${name}`}
                name={name}
                type="text"
                readOnly={readOnly || disabled}
                placeholder={placeholder}
                className={`w-full h-full bg-transparent ${disabled ? "text-gray/75 cursor-default" : "text-gray"} text-xs font-bold placeholder-gray focus:outline-none`}
                value={value}
                onChange={onChange}
            />

            {endIcon}

        </label>

    )
}

export default TextInput;