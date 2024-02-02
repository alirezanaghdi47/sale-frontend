// libraries
import Slider from "rc-slider";

// styles
import 'rc-slider/assets/index.css';
import "@/styles/customize/rc-slider.scss";

// types
import {RangeInputType} from "@/types/modules";

const RangeInput = ({min, max, step, values, onChange}: RangeInputType) => {

    return (
        <Slider
            range
            min={min}
            max={max}
            step={step}
            value={values}
            onChange={onChange}
        />
    )
}

export default RangeInput;