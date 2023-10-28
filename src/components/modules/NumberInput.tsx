// libraries
import Cleave from 'cleave.js/react';

const NumberInput = ({name , options, value, onChange, placeholder}) => {

    return (
        <label
            htmlFor={`input-${name}`}
            className="flex justify-center items-center gap-x-2 w-full bg-light rounded-lg px-4 py-2"
        >
            <Cleave
                id={`input-${name}`}
                placeholder={placeholder}
                options={options}
                value={value}
                onChange={onChange}
                className="w-full bg-transparent text-gray font-bold placeholder-gray focus:outline-none"
                style={{direction: "ltr"}}
            />
        </label>
    )
}

export default NumberInput;