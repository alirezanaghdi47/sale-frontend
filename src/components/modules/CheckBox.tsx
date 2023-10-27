"use client";

const CheckBox = ({title , name, value , onChange , error, touched}) => {

    return (
        <label
            className="flex justify-start items-center gap-x-2 w-full"
            htmlFor={`checkbox-${value}`}
        >

            <input
                type="checkbox"
                id={`check-box-${value}`}
                className="w-[20px] h-[20px] bg-secondary text-blue border border-solid border-secondary rounded-lg cursor-pointer focus:border-transparent focus:ring-0 focus:ring-offset-0"
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