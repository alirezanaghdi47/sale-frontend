// libraries
import { Menu as ReactMenu, MenuItem as ReactMenuItem } from '@szhsin/react-menu';

// styles
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import "@/styles/customize/@szh-react-menu.scss";

export const Menu = ({children , menuButton , arrow , align , direction}) => {

    return (
        <ReactMenu
            menuButton={
                <div>
                    {menuButton}
                </div>
            }
            arrow={arrow}
            align={align}
            direction={direction}
            gap={0}
            transition
            unmountOnClose
        >
            {children}
        </ReactMenu>
    )
}

export const MenuItem = ({children}) => {

    return (
        <ReactMenuItem>
            {children}
        </ReactMenuItem>
    )
}