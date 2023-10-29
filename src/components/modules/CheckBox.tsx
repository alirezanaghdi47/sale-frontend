// libraries
import ReactCheckBox from "rc-checkbox";

// styles
import "rc-checkbox/assets/index.css";
import "@/styles/customize/rc-checkbox.scss";

const CheckBox = ({title, name, value, onChange}) => {

    return (
        <label
            className="flex justify-start items-center gap-x-2 w-full cursor-pointer"
            htmlFor={`checkbox-${value}`}
        >

            <ReactCheckBox
                id={`checkbox-${value}`}
                name={name}
                value={value}
                onChange={onChange}
            />

            <span className="text-gray text-sm font-bold">
                {title}
            </span>

        </label>
    )
}

export default CheckBox;