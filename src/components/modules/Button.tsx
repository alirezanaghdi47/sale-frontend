// libraries
import Link from "next/link";

const styles = {
    variant: {
        contained: {
            blue:"bg-blue text-light",
            light:"bg-light text-gray"
        },
        text: {
            dark: "text-dark",
            gray: "text-gray",
            red: "text-red",
            blue: "text-blue",
        }
    },
    size:{
        sm: "text-xs font-bold px-2 py-1",
        md: "text-sm font-bold px-4 py-2",
        lg: "text-lg font-bold px-4 py-2",
        full: "w-full text-sm font-bold px-4 py-2"
    }
}

export const Button = ({children, size = "md" ,color, variant, startIcon, endIcon, onClick, vertical , disabled, loading , active}) => {

    return (
        <button
            className={`flex ${vertical ? "flex-col gap-y-2" : "flex-row gap-x-2"} justify-center items-center ${active ? "text-blue" : styles.variant[variant][color]} ${styles.size[size]} rounded-lg whitespace-nowrap`}
            onClick={onClick}
            disabled={disabled || loading}
        >

            {
                startIcon && (
                    <span className="text-current">
                        {startIcon}
                    </span>
                )
            }

            {children}

            {
                endIcon && (
                    <span className="text-current">
                        {endIcon}
                    </span>
                )
            }

        </button>
    )
}

export const LinkButton = ({children, size = "md" ,color, variant, startIcon, endIcon, href, vertical , active}) => {

    return (
        <Link
            className={`flex ${vertical ? "flex-col gap-y-2" : "flex-row gap-x-2"} justify-center items-center ${active ? "text-blue" : styles.variant[variant][color]} ${styles.size[size]} rounded-lg whitespace-nowrap`}
            href={href}
        >

            {
                startIcon && (
                    <span className="text-current">
                        {startIcon}
                    </span>
                )
            }

            {children}

            {
                endIcon && (
                    <span className="text-current">
                        {endIcon}
                    </span>
                )
            }

        </Link>
    )
}