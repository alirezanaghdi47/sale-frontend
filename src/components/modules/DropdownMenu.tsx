// libraries
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';

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

export const DropdownMenuItem = ({children , onClick , href}) =>{

    return (
        <MenuItem
            onClick={onClick}
            href={href}
        >
            {children}
        </MenuItem>
    )
}