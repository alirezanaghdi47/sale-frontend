// libraries
import Link from "next/link";

const styles = {
    variant: {
        contained: {
            red: "bg-red text-light",
            blue: "bg-blue text-light",
            yellow: "bg-yellow text-dark",
            green: "bg-green text-light",
            light: "bg-light text-gray",
            secondary: "bg-secondary text-gray",
        },
        text: {
            dark: "text-dark",
            light: "text-light",
            gray: "text-gray",
            red: "text-red",
            blue: "text-blue",
        },
    },
    size: {
        sm: "text-sm font-bold px-3 py-1.5",
        md: "text-base font-bold px-4 py-2",
        lg: "text-lg font-bold px-4 py-2",
        full: "w-full text-sm font-bold px-4 py-2"
    },
    justify: {
        start: "justify-start",
        center: "justify-center",
        end: "justify-end",
    }
}

export const Button = ({children , as = "button", size = "sm", color, variant, startIcon, endIcon, justify = "center", onClick, vertical, disabled}) => {

    const CustomTag = as;

    return (
        <CustomTag
            className={`flex ${vertical ? "flex-col gap-y-2" : "flex-row gap-x-2"} ${styles.justify[justify]} items-center ${styles.variant[variant][color]} ${styles.size[size]} rounded-lg ${disabled && "bg-opacity-50"} whitespace-nowrap transition-colors duration-300 ease-out-expo`}
            onClick={onClick}
            disabled={disabled}
        >

            {startIcon && startIcon}

            {children}

            {endIcon && endIcon}

        </CustomTag>
    )
}

export const LinkButton = ({children, size = "sm", color, variant, startIcon, endIcon, justify = "center", href, vertical , onClick}) => {

    return (
        <Link
            className={`flex ${vertical ? "flex-col gap-y-2" : "flex-row gap-x-2"} ${styles.justify[justify]} items-center ${styles.variant[variant][color]} ${styles.size[size]} rounded-lg whitespace-nowrap transition-colors duration-300 ease-out-expo`}
            href={href}
            onClick={onClick}
        >

            {startIcon && startIcon}

            {children}

            {endIcon && endIcon}

        </Link>
    )
}