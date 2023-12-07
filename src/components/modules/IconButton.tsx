// libraries
import Link from "next/link";

const styles = {
    variant: {
        contained: {
            blue:"bg-blue text-light",
            light:"bg-light text-gray",
            red: "bg-red text-light",
        },
        text: {
            gray: "text-gray",
            red: "text-red",
            blue: "text-blue",
            yellow: "text-yellow",
        }
    },
    size:{
        sm: "p-1",
        md: "p-2",
        lg: "p-3",
    },
    shape:{
        rounded:"rounded-lg",
        circle:"rounded-full"
    }
}

export const IconButton = ({children , size = "sm" ,color, variant , onClick , shape = "rounded"}) => {

    return (
        <button
            className={`flex justify-center items-center ${styles.variant[variant][color]} ${styles.size[size]} ${styles.shape[shape]}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}


export const LinkIconButton = ({children ,size = "sm" ,color, variant, href , shape = "rounded"}) => {

    return (
        <Link
            className={`flex justify-center items-center ${styles.variant[variant][color]} ${styles.size[size]} ${styles.shape[shape]}`}
            href={href}
        >
            {children}
        </Link>
    )
}

