// libraries
import Switch from "rc-switch";

// styles
import "rc-switch/assets/index.css";
import "@/styles/libraries/rc-switch.scss";

const SwitchBox = ({title , name, value , onChange , error, touched}) => {

    return (
        <label
            className="flex justify-between items-center w-full cursor-pointer"
            htmlFor={`checkbox-${name}`}
        >

            <span className="text-gray text-sm font-bold">
                {title}
            </span>

            <Switch
                id={`input-${name}`}
                name={name}
                checked={value}
                onChange={(value) => onChange(value)}
            />

        </label>
    )
}

export default SwitchBox;