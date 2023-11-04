const SwitchBox = ({name, value, checked, onChange}) => {

    return (
        <span className={`flex items-center w-[40px] h-[20px] ${checked ? "bg-blue" : "bg-secondary"} rounded-full transition-colors duration-300 ease-out-expo`}>

            <input
                id={`switchbox-${name}`}
                type="checkbox"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="hidden"
            />

            <span
                className={`w-[12px] h-[12px] rounded-full transform ${checked ? "bg-light -translate-x-[24px]" : "bg-gray -translate-x-[4px]"} transition-transform duration-300 ease-out-expo`}/>

        </span>
    )
}

export default SwitchBox;