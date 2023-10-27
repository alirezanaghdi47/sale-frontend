// libraries
import Link from "next/link";

const styles = {
    variant: {
        contained: {
            blue:"bg-blue text-light",
            light:"bg-light text-gray"
        },
        text: {
            gray: "text-gray",
            red: "text-red",
        }
    },
    size:{
        sm: "text-xs font-bold px-2 py-1",
        md: "text-sm font-bold px-4 py-2",
        full: "w-full"
    }
}

const Button = ({children, size = "md" ,color, variant, startIcon, endIcon, onClick, href, disabled, loading}) => {

    return href ? (
        <Link
            className={`flex justify-center items-center gap-x-2 ${styles.variant[variant][color]} ${styles.size[size]} rounded-lg whitespace-nowrap`}
            href={href}
            onClick={onClick}
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
    ) : (
        <button
            className={`flex justify-center items-center gap-x-2 ${styles.variant[variant][color]} ${styles.size[size]} rounded-lg whitespace-nowrap px-4 py-2`}
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

export default Button;
