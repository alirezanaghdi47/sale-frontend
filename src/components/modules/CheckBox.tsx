// libraries
import Checkbox from "rc-checkbox";

// styles
import "rc-checkbox/assets/index.css";
import "@/styles/libraries/rc-checkbox.scss";

const CheckBox = ({title , name, value , onChange , error, touched}) => {

    return (
        <label
            className="flex justify-start items-center w-full cursor-pointer"
            htmlFor={`checkbox-${name}`}
        >

            <Checkbox
                id={`input-${name}`}
                name={name}
                checked={value}
                onChange={onChange}
            />

            <span className="text-gray text-sm font-bold">
                {title}
            </span>

        </label>
    )
}

export default CheckBox;