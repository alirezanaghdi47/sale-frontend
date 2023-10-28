// libraries
import {getTrackBackground, Range as ReactRange} from "react-range";

// styles
import "@/styles/customize/react-range.scss";

const ReactRangeTrack = ({children, values, min, max, ...props}) => {

    return (
        <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className="react-range__container"
        >
            <div
                ref={props.ref}
                className="react-range__track"
                style={{
                    background: getTrackBackground({
                        values,
                        colors: ['#e2e8f0', '#2563eb', '#e2e8f0'],
                        min: min,
                        max: max,
                    }),
                }}
            >
                {children}
            </div>
        </div>
    )
}

const ReactRangeThumb = (props) => {

    return (
        <div
            {...props}
            className="react-range__thumb"
            style={{...props.style}}
        />
    )
}

const RangeInput = ({min, max, step, values, onChange}) => {

    return (
        <ReactRange
            values={values}
            step={step}
            min={min}
            max={max}
            rtl
            onChange={(values) => onChange(values)}
            renderTrack={({props, children}) =>
                <ReactRangeTrack
                    children={children}
                    values={values}
                    min={min}
                    max={max}
                    {...props}
                />
            }
            renderThumb={({index, props, isDragged}) =>
                <ReactRangeThumb {...props}/>
            }
        />
    )
}

export default RangeInput;