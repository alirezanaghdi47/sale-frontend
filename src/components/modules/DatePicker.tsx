// libraries
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {LuChevronLeft, LuChevronRight , LuX} from "react-icons/lu";

// styles
import "@/styles/libraries/react-multi-date-picker.scss";

const DatePickerInput = ({onFocus, name, placeholder, value}) => {

    return (
        <label
            className={`flex justify-center items-center gap-x-2 w-full bg-secondary rounded-lg px-4 py-2`}
        >

            <input
                type="text"
                name={name}
                placeholder={placeholder}
                value={value}
                onFocus={onFocus}
                autoComplete="none"
                readOnly={true}
                className="w-full bg-transparent text-gray font-bold border-none p-0 focus:outline-none focus:border-none focus:ring-0 focus:ring-offset-0"
            />

        </label>
    )
}

const DatePicker2 = ({name, title, placeholder, value, onChange, onClear}) => {

    return (
        <div className="flex flex-col justify-start items-start gap-y-2 w-full">

            {
                title && (
                    <span className="font-bold text-gray text-sm">
                        {title}
                    </span>
                )
            }

            <DatePicker
                value={value}
                currentDate={null}
                onChange={(date) => onChange(date)}
                calendar={persian}
                locale={persian_fa}
                maxDate={new Date()}
                format="YYYY/MM/DD"
                dateSeparator=" - "
                arrow={false}
                headerOrder={["RIGHT_BUTTON", "MONTH_YEAR", "LEFT_BUTTON"]}
                render={
                    <DatePickerInput
                        name={name}
                        value={value}
                        placeholder={placeholder}
                    />
                }
                renderButton={(direction, handleClick) => (
                    <button onClick={handleClick}>
                        {direction === "right" ? <LuChevronRight size={20}/> : <LuChevronLeft size={20}/>}
                    </button>
                )}
                calendarPosition="bottom-center"
            />

        </div>
    )
}

export default DatePicker2;