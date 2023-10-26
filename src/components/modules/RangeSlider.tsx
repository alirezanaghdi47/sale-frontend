// libraries
import {getTrackBackground, Range} from "react-range";

// styles
import "@/styles/libraries/react-range.scss";

const RangeSlider = ({min, max, step, rtl, values, onChange}) => {

    return (
        <>
            <Range
                values={values}
                step={step}
                min={min}
                max={max}
                rtl={rtl}
                onChange={(values) => onChange(values)}
                renderTrack={({props, children}) => (
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
                                    rtl: rtl
                                }),
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({index, props, isDragged}) => (
                    <div
                        {...props}
                        className="react-range__thumb"
                        style={{...props.style}}
                    />
                )}
            />
        </>
    )
}

export default RangeSlider;