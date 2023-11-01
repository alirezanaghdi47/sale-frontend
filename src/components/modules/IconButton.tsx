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
        }
    },
    size:{
        sm: "p-1",
        md: "p-2",
    },
    shape:{
        rounded:"rounded-lg",
        circle:"rounded-full"
    }
}

export const IconButton = ({children , size = "md" ,color, variant , active , onClick , shape = "rounded"}) => {

    return (
        <button
            className={`flex justify-center items-center ${active ? "text-blue" : styles.variant[variant][color]} ${styles.size[size]} ${styles.shape[shape]}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}


export const LinkIconButton = ({children ,size = "md" ,color, variant, href , active , shape = "rounded"}) => {

    return (
        <Link
            className={`flex justify-center items-center ${active ? "text-blue" : styles.variant[variant][color]} ${styles.size[size]} ${styles.shape[shape]}`}
            href={href}
        >
            {children}
        </Link>
    )
}

