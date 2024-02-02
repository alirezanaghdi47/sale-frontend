// libraries
import {Menu as ReactMenu, MenuItem as ReactMenuItem} from '@szhsin/react-menu';

// modules
import {Button, LinkButton} from "@/modules/Button";

// styles
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import "@/styles/customize/@szh-react-menu.scss";

// types
import {MenuItemType, MenuType} from "@/types/modules";

export const Menu = ({children, menuButton, arrow, align, direction}: MenuType) => {

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

export const MenuItem = ({children, color, size = "sm", variant, onClick, href, icon}: MenuItemType) => {

    return href ? (
        <ReactMenuItem>

            <LinkButton
                href={href}
                variant={variant}
                color={color}
                size={size}
                startIcon={icon}
            >
                {children}
            </LinkButton>

        </ReactMenuItem>
    ) : (
        <ReactMenuItem>

            <Button
                variant={variant}
                color={color}
                size={size}
                startIcon={icon}
                onClick={onClick}
            >
                {children}
            </Button>

        </ReactMenuItem>
    )
}