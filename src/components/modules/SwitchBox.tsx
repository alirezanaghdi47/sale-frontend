
const SwitchBox = ({name, value, checked, onChange}) => {

    return (
        <span className={`flex items-center w-[48px] h-[24px] ${checked ? "bg-blue" : "bg-secondary"} rounded-full`}>

            <input
                id={`switchbox-${name}`}
                type="checkbox"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="hidden"
            />

            <span className={`w-[16px] h-[16px] rounded-full transform ${checked ? "bg-light -translate-x-7" : "bg-gray -translate-x-1"}`}>

            </span>

        </span>
    )
}

export default SwitchBox;