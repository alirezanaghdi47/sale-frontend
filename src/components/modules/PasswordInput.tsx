// libraries
import {useToggle} from "@react-hooks-library/core";
import {LuEye, LuEyeOff} from "react-icons/lu";

const PasswordInput = ({name, value, onChange, placeholder, startIcon}) => {

    const {bool: toggleShowPassword , toggle:_handleToggleShowPassword} = useToggle();

    return (
        <label
            htmlFor={`input-${name}`}
            className="flex justify-center items-center gap-x-2 w-full bg-light rounded-lg px-4 py-2"
        >

            {startIcon && startIcon}

            <input
                id={`input-${name}`}
                type={toggleShowPassword ? "text" : "password"}
                name={name}
                placeholder={placeholder}
                className="w-full bg-transparent text-gray font-bold placeholder-gray focus:outline-none"
                value={value}
                onChange={onChange}
            />

            <button
                className="text-gray"
                onClick={_handleToggleShowPassword}
            >
                {toggleShowPassword ? <LuEyeOff size={20}/> : <LuEye size={20}/>}
            </button>

        </label>
    )
}

export default PasswordInput;