const RadioBox = ({name, value , checked , onChange}) => {

    return (
        <span className={`flex justify-center items-center w-[20px] h-[20px] ${checked ? "bg-blue" : "bg-secondary"} rounded-full transition-colors duration-300 ease-out-expo`}>

            <input
                id={`radiobox-${value}`}
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={(e) => onChange(e.target.value)}
                className="hidden"
            />

            <span className={`w-[12px] h-[12px] bg-light rounded-full ${checked ? "scale-100" : "scale-0"} transition-transform duration-300 ease-out-expo`}/>

        </span>
    )
}

export default RadioBox;