const styles = {
    color: {
        blue: "bg-blue/25 border border-solid border-blue text-blue",
        red: "bg-red/25 border border-solid border-red text-red",
    }
}

const Alert = ({message ,color, actionButton}) => {

    return (
        <div
            className={`flex justify-between items-center gap-x-4 w-full ${styles.color[color]} rounded-lg p-4`}
        >

            <p className="text-base font-bold">
                {message}
            </p>

            {actionButton}

        </div>
    )
}

export default Alert;