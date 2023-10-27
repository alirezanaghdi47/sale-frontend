"use client";

const RadioBox = ({title , name, value , onChange , error, touched}) => {

    return (
        <label
            className="flex justify-start items-center gap-x-2 w-full"
            htmlFor={`checkbox-${value}`}
        >

            <input
                type="radio"
                id={`radio-box-${value}`}
                className="w-[20px] h-[20px] bg-secondary text-blue border border-solid border-secondary rounded-full cursor-pointer focus:border-transparent focus:ring-0 focus:ring-offset-0"
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

export default RadioBox;