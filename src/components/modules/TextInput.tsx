const TextInput = ({name, value, onChange, placeholder, startIcon, endIcon}) => {

    return (
        <label
            htmlFor={`input-${name}`}
            className="flex justify-center items-center gap-x-2 w-full h-[40px] bg-secondary rounded-lg px-4 py-2"
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
                name={name}
                type="text"
                placeholder={placeholder}
                className="w-full h-full bg-transparent text-gray font-bold placeholder-gray focus:outline-none"
                value={value}
                onChange={onChange}
            />

            {
                endIcon && (
                    <span className="text-gray">
                        {endIcon}
                    </span>
                )
            }

        </label>

    )
}

export default TextInput;