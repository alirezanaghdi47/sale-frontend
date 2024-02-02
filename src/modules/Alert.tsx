// types
import {AlertType} from "@/types/modules";

const styles = {
    color: {
        blue: "bg-blue/25 border border-solid border-blue text-blue",
        red: "bg-red/25 border border-solid border-red text-red",
    }
}

const Alert = ({message ,color, actionButton}: AlertType) => {

    return (
        <div
            // @ts-ignore
            className={`flex justify-between items-center gap-x-4 w-full ${styles.color[color]} rounded-lg p-4`}
        >

            <p className="text-sm font-bold">
                {message}
            </p>

            {actionButton}

        </div>
    )
}

export default Alert;