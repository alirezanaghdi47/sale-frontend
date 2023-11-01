// libraries
import Slider from "rc-slider";

// styles
import 'rc-slider/assets/index.css';
import "@/styles/addon/rc-slider.scss";

const RangeInput = ({min, max, step, values, onChange}) => {

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