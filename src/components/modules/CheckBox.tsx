// libraries
import {LuCheck} from "react-icons/lu";

const CheckBox = ({name, value, checked, onChange}) => {

    return (
        <span className={`flex justify-center items-center w-[24px] h-[24px] ${checked ? "bg-blue" : "bg-secondary"} rounded-lg`}>

            <input
                id={`checkbox-${value}`}
                type="checkbox"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="hidden"
            />

            {
                checked && (
                    <span className="text-light">
                        <LuCheck size={20}/>
                    </span>
                )
            }

        </span>
    )
}

export default CheckBox;