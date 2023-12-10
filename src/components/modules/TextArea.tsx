const TextArea = ({name, value, onChange, placeholder , rows}) => {

    return (
        <label
            htmlFor={`textarea-${name}`}
            className="flex justify-center items-center gap-x-2 w-full min-h-[32px] bg-secondary rounded-lg px-4 py-2"
        >

            <textarea
                id={`textarea-${name}`}
                name={name}
                placeholder={placeholder}
                rows={rows}
                className="w-full h-full bg-transparent text-xs text-gray font-bold placeholder-gray focus:outline-none resize-none"
                value={value}
                onChange={onChange}
            />

        </label>

    )
}

export default TextArea;