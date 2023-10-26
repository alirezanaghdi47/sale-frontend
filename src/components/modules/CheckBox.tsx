"use client";

// libraries
import Checkbox from "rc-checkbox";

// styles
import "rc-checkbox/assets/index.css";
import "@/styles/libraries/rc-checkbox.scss";

const CheckBox = ({title , name, value , onChange , error, touched}) => {

    return (
        <label
            className="flex justify-start items-center gap-x-2 w-full cursor-pointer"
            htmlFor={`checkbox-${name}`}
        >

            {/*<input*/}
            {/*    type="checkbox"*/}
            {/*    id={`check-box-${name}`}*/}
            {/*    className="w-[20px] h-[20px] bg-secondary text-blue border border-solid border-secondary rounded-lg focus:border-transparent focus:ring-0 focus:ring-offset-0"*/}
            {/*    name={name}*/}
            {/*    value={value}*/}
            {/*    onChange={onChange}*/}
            {/*/>*/}

            <Checkbox
                id={`input-${name}`}
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