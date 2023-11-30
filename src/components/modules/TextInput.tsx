const TextInput = ({name, value, onChange, placeholder , disabled, startIcon, endIcon , readOnly}) => {

    return (
        <label
            htmlFor={`input-${name}`}
            className="flex justify-center items-center gap-x-2 w-full h-[40px] bg-secondary rounded-lg px-4 py-2"
        >

            {startIcon && startIcon}

            <input
                id={`input-${name}`}
                name={name}
                type="text"
                readOnly={readOnly || disabled}
                placeholder={placeholder}
                className={`w-full h-full bg-transparent ${disabled ? "text-gray/75 cursor-default" : "text-gray"} font-bold placeholder-gray focus:outline-none`}
                value={value}
                onChange={onChange}
            />

            {endIcon && endIcon}

        </label>

    )
}

export default TextInput;