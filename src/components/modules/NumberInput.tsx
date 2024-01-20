// libraries
import Cleave from 'cleave.js/react';

const NumberInput = ({name , options, value, onChange, placeholder}) => {

    return (
        <label
            htmlFor={`input-${name}`}
            className="flex justify-center items-center gap-x-2 w-full h-[32px] bg-secondary rounded-lg px-4 py-2"
        >
            <Cleave
                id={`input-${name}`}
                name={name}
                placeholder={placeholder}
                options={options}
                value={value}
                onChange={(e) => {
                    e.target.value = e.target.rawValue;
                    onChange(e);
                }}
                className="w-full h-full bg-transparent text-xs text-gray font-bold placeholder-gray focus:outline-none"
                style={{direction: "ltr"}}
            />
        </label>
    )
}

export default NumberInput;