
const TextInput = ({title, name, value, onChange, placeholder, startIcon, endIcon, error, touched}) => {

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
                    name={name}
                    type="text"
                    placeholder={placeholder}
                    className="w-full bg-transparent text-gray text-sm font-bold focus:outline-none"
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

export default TextInput;