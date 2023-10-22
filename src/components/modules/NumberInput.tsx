// libraries
import Cleave from 'cleave.js/react';

const NumberInput = ({title, name , options, value, onChange, placeholder, error, touched}) => {

    return (
        <div className="flex flex-col justify-start items-start gap-y-2 w-full">

            {
                title && (
                    <span className="font-bold text-gray text-sm">
                        {title}
                    </span>
                )
            }

            <label
                htmlFor={`input-${name}`}
                className="flex justify-center items-center gap-x-2 w-full bg-secondary rounded-lg px-4 py-2"
            >
                <Cleave
                    id={`input-${name}`}
                    placeholder={placeholder}
                    options={options}
                    value={value}
                    onChange={onChange}
                    className="w-full bg-transparent text-gray font-bold focus:outline-none"
                    style={{direction: "ltr"}}
                />
            </label>

            {
                (touched && error) && (
                    <p className="text-xs text-red">
                        {error}
                    </p>
                )
            }

        </div>
    )
}

export default NumberInput;