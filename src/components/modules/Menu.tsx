// libraries
import {Menu as ReactMenu, MenuItem as ReactMenuItem} from '@szhsin/react-menu';

// components
import {Button, LinkButton} from "@/components/modules/Button";

// styles
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import "@/styles/addon/@szh-react-menu.scss";

export const Menu = ({children, menuButton, arrow, align, direction}) => {

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

export const MenuItem = ({children, color, size = "md", variant, onClick, href, active , icon}) => {

    return href ? (
        <ReactMenuItem>

            <LinkButton
                href={href}
                variant={variant}
                color={color}
                size={size}
                active={active}
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
                active={active}
                startIcon={icon}
                onClick={onClick}
            >
                {children}
            </Button>

        </ReactMenuItem>
    )
}