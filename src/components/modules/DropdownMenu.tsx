// libraries
import { Menu, MenuItem } from '@szhsin/react-menu';

// styles
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import "@/styles/libraries/react-menu.scss";

export const DropdownMenu = ({children , menuButton , arrow , align , direction}) => {

    return (
        <Menu
            menuButton={menuButton}
            arrow={arrow}
            align={align}
            direction={direction}
            gap={0}
            transition
            unmountOnClose
        >
            {children}
        </Menu>
    )
}

export const DropdownMenuItem = ({children}) =>{

    return (
        <MenuItem>
            {children}
        </MenuItem>
    )
}