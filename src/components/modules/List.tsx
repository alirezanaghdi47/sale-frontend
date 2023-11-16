// libraries
import {forwardRef} from "react";
import {Virtuoso} from "react-virtuoso";

const CustomVirtuosoList = forwardRef((props , ref) =>
    <ul ref={ref} {...props} className={props?.className}>
        {props?.children}
    </ul>
);

const CustomVirtuosoItem = forwardRef((props , ref) => (
    <li ref={ref} {...props} className={props?.className}>
        {props?.children}
    </li>
))

const List = ({data , totalCount , itemContent , itemClassName , listClassName , style}) => {

    return (
        <Virtuoso
            data={data}
            totalCount={totalCount}
            itemContent={itemContent}
            components={{
                List: forwardRef((props, ref) =>
                    <CustomVirtuosoList ref={ref} {...props} className={listClassName}/>
                ),
                Item: forwardRef((props, ref) =>
                    <CustomVirtuosoItem ref={ref} {...props} className={itemClassName}/>
                ),
            }}
            style={style}
        />
    )
}

export default List;