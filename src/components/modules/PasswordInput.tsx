// libraries
import {useToggle} from "@react-hooks-library/core";
import {LuEye, LuEyeOff} from "react-icons/lu";

const PasswordInput = ({title, name, value, onChange, placeholder, startIcon, error, touched}) => {

    const {bool: toggleShowPassword , toggle:_handleToggleShowPassword} = useToggle();

    return (
        <div className="flex flex-col justify-start items-start gap-y-2 w-full">

            {
                title && (
                    <span className="font-bold text-gray text-sm">
                        {title}
                    </span>
                )
            }

            <label
                htmlFor={`input-${name}`}
                className={`flex justify-center items-center gap-x-2 w-full bg-secondary rounded-lg px-4 py-2`}
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
                    className="w-full bg-transparent text-gray text-sm font-bold focus:outline-none"
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

            {
                (touched && error) && (
                    <p className="text-xs text-red">
                        {error}
                    </p>
                )
            }

        </div>
    )
}

export default PasswordInput;