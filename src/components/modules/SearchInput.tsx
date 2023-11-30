import {IconButton} from "@/components/modules/IconButton";
import {LuSearch} from "react-icons/lu";

const SearchInput = ({name, value, onChange , onSubmit, placeholder, endIcon}) => {

    return (
        <label
            htmlFor={`input-${name}`}
            className="flex justify-center items-center gap-x-2 w-full h-[40px] bg-secondary rounded-lg px-4 py-2"
        >

            <IconButton
                variant="text"
                color="gray"
                onClick={onSubmit}
            >
                <LuSearch
                    size={20}
                    className="text-current"
                />
            </IconButton>

            <input
                id={`input-${name}`}
                name={name}
                type="text"
                placeholder={placeholder}
                className={`w-full h-full bg-transparent text-gray font-bold placeholder-gray focus:outline-none`}
                value={value}
                onChange={onChange}
            />

            {endIcon && endIcon}

        </label>

    )
}

export default SearchInput;