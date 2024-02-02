// libraries
import {LuSearch} from "react-icons/lu";

// modules
import {IconButton} from "@/modules/IconButton";

// types
import {SearchInputType} from "@/types/modules";

const SearchInput = ({name, value, onChange , onSubmit, placeholder}: SearchInputType) => {

    return (
        <label
            htmlFor={`input-${name}`}
            className="flex justify-center items-center gap-x-2 w-full h-[32px] bg-secondary rounded-lg px-4 py-2"
        >

            <IconButton
                variant="text"
                color="gray"
                onClick={onSubmit}
            >
                <LuSearch
                    size={16}
                    className="text-current"
                />
            </IconButton>

            <input
                id={`input-${name}`}
                name={name}
                type="text"
                placeholder={placeholder}
                className={`w-full h-full bg-transparent text-gray text-xs font-bold placeholder-gray focus:outline-none`}
                value={value}
                onChange={onChange}
            />

        </label>

    )
}

export default SearchInput;