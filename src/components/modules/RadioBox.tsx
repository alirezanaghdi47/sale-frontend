const RadioBox = ({name, value , checked , onChange}) => {

    return (
        <span className={`flex justify-center items-center w-[24px] h-[24px] ${checked ? "bg-blue" : "bg-secondary"} rounded-full`}>

            <input
                id={`radiobox-${value}`}
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="hidden"
            />

            {
                checked && (
                    <span className="w-[16px] h-[16px] bg-light rounded-full"/>
                )
            }

        </span>
    )
}

export default RadioBox;