// libraries
import ReactRadioBox from "rc-checkbox";

// styles
import "@/styles/customize/rc-radiobox.scss";

const RadioBox = ({title , name, value , checked , onChange}) => {

    console.log(value , "->" , checked)

    return (
        <label
            className="flex justify-start items-center gap-x-2 w-full cursor-pointer"
            htmlFor={`radio-box-${value}`}
        >

            <ReactRadioBox
                id={`radio-box-${value}`}
                name={name}
                value={value}
                // onChange={(e)=> {
                //     if (checked) return e.preventDefault();
                //     onChange(value);
                // }}
            />

            {/*<span className={`rc-radiobox ${checked ? "rc-radiobox-checked" : ""}`}>*/}

            {/*    <input*/}
            {/*        type="radio"*/}
            {/*        id={`radio-box-${value}`}*/}
            {/*        className="rc-radiobox-input"*/}
            {/*        name={name}*/}
            {/*        value={value}*/}
            {/*        checked={checked}*/}
            {/*        onChange={(e) => onChange(e.target.value)}*/}
            {/*    />*/}

            {/*    <span className="rc-radiobox-inner"/>*/}

            {/*</span>*/}

            <span className="text-gray text-sm font-bold">
                {title}
            </span>

        </label>
    )
}

export default RadioBox;