// libraries
import ReactSelect, {components} from "react-select";
import {LuChevronDown, LuX} from "react-icons/lu";

// styles
import "@/styles/customize/react-select.scss";

const ReactSelectDropdownIndicator = (props: any) => {

    return components.DropdownIndicator && (
        <components.DropdownIndicator {...props}>
            <LuChevronDown
                size={20}
                className="text-gray"
            />
        </components.DropdownIndicator>
    )
}

const ReactSelectClearIndicator = (props: any) => {

    return components.ClearIndicator && (
        <components.ClearIndicator {...props}>
            <LuX
                size={20}
                className="text-gray"
            />
        </components.ClearIndicator>
    )
}

const ReactSelectNoOptionsMessage = (props) => {

    return (
        <components.NoOptionsMessage {...props} >
            داده ای وجود ندارد
        </components.NoOptionsMessage>
    );
};

const SelectBox = ({name, placeholder, value, options, onChange, isMulti, isClearable, isSearchable}) => {

    return (
        <ReactSelect
            id={`selectbox-${name}`}
            instanceId={`selectbox-${name}`}
            name={name}
            options={options}
            closeMenuOnSelect={true}
            isSearchable={isSearchable}
            isClearable={isClearable}
            isMulti={isMulti}
            isRtl
            placeholder={placeholder ?? ""}
            value={value}
            onChange={(newValue) => onChange(newValue)}
            components={{
                IndicatorSeparator: () => null,
                DropdownIndicator: ReactSelectDropdownIndicator,
                ClearIndicator: ReactSelectClearIndicator,
                NoOptionsMessage: ReactSelectNoOptionsMessage
            }}
            className="react-select-container"
            classNamePrefix="react-select"
        />
    )
}

export default SelectBox;