const TextInput = ({name, value, onChange, placeholder, startIcon, endIcon}) => {

    return (
        <label
            htmlFor={`input-${name}`}
            className="flex justify-center items-center gap-x-2 w-full bg-secondary rounded-lg px-4 py-2"
        >

            {startIcon && startIcon}

            <input
                id={`input-${name}`}
                name={name}
                type="text"
                placeholder={placeholder}
                className="w-full bg-transparent text-gray font-bold placeholder-gray focus:outline-none"
                value={value}
                onChange={onChange}
            />

            {endIcon && endIcon}

        </label>

    )
}

export default TextInput;