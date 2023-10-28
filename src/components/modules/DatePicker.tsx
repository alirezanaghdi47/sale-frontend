// libraries
import ReactDatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import {LuChevronLeft, LuChevronRight} from "react-icons/lu";

// styles
import "@/styles/customize/react-multi-date-picker.scss";

const ReactDatePickerInput = ({onFocus, name, placeholder, value}) => {

    return (
        <label
            className={`flex justify-center items-center gap-x-2 w-full bg-light border border-solid border-secondary rounded-lg px-4 py-2`}
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

const ReactDatePickerHeader = ({direction , handleClick}) => {

    return (
        <button onClick={handleClick}>
            {direction === "right" ? <LuChevronRight size={20}/> : <LuChevronLeft size={20}/>}
        </button>
    )
}

const DatePicker = ({name, placeholder, value, onChange}) => {

    return (
        <ReactDatePicker
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
                <ReactDatePickerInput
                    name={name}
                    value={value}
                    placeholder={placeholder}
                />
            }
            renderButton={(direction, handleClick) =>
                <ReactDatePickerHeader
                    direction={direction}
                    handleClick={handleClick}
                />
            }
            calendarPosition="bottom-center"
        />
    )
}

export default DatePicker;