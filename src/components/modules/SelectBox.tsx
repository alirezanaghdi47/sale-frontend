// libraries
import Select, {components} from "react-select";
import {LuChevronDown, LuX} from "react-icons/lu";

// styles
import "@/styles/libraries/react-select.scss";

const DropdownIndicator = (props: any) => {

    return components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
            <LuChevronDown
                size={16}
                className="text-gray"
            />
        </components.DropdownIndicator>
    )
}

const ClearIndicator = (props: any) => {

    return components.ClearIndicator && (
        <components.ClearIndicator {...props}>
            <LuX
                size={16}
                className="text-gray"
            />
        </components.ClearIndicator>
    )
}

const NoOptionsMessage = (props) => {

    return (
        <components.NoOptionsMessage {...props} >
            داده ای وجود ندارد
        </components.NoOptionsMessage>
    );
};


const SelectBox = ({name , title , placeholder , value , options , onChange , isMulti , isClearable , isSearchable}) => {

    return (
        <div className="flex flex-col justify-start items-start gap-y-2 w-full">

            {
                title && (
                    <span className="font-bold text-gray text-sm">
                        {title}
                    </span>
                )
            }

            <Select
                name={name}
                options={options}
                closeMenuOnSelect={true}
                isSearchable={isSearchable}
                isClearable={isClearable}
                isMulti={isMulti}
                isRtl
                placeholder={placeholder}
                value={value}
                onChange={(newValue) => onChange(newValue)}
                components={{
                    IndicatorSeparator: () => null,
                    DropdownIndicator,
                    ClearIndicator,
                    NoOptionsMessage
                }}
                className="react-select-container"
                classNamePrefix="react-select"
            />

        </div>
    )
}

export default SelectBox;