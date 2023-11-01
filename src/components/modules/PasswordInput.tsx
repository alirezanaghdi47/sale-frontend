// libraries
import {useToggle} from "@react-hooks-library/core";
import {LuEye, LuEyeOff} from "react-icons/lu";
import {IconButton} from "@/components/modules/IconButton";

const PasswordInput = ({name, value, onChange, placeholder, startIcon}) => {

    const {bool: toggleShowPassword , toggle:_handleToggleShowPassword} = useToggle();

    return (
        <label
            htmlFor={`input-${name}`}
            className="flex justify-center items-center gap-x-2 w-full bg-secondary rounded-lg px-4 py-2"
        >

            {
                startIcon && (
                    <span className="text-gray">
                        {startIcon}
                    </span>
                )
            }

            <input
                id={`input-${name}`}
                type={toggleShowPassword ? "text" : "password"}
                name={name}
                placeholder={placeholder}
                className="w-full bg-transparent text-gray font-bold placeholder-gray focus:outline-none"
                value={value}
                onChange={onChange}
            />

            <IconButton
                variant="text"
                size="sm"
                color="gray"
                onClick={_handleToggleShowPassword}
            >
                {toggleShowPassword ? <LuEyeOff size={20}/> : <LuEye size={20}/>}
            </IconButton>

        </label>
    )
}

export default PasswordInput;