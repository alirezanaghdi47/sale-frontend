// libraries
import toast from "react-hot-toast";
import {LuCheck, LuX} from "react-icons/lu";

const styles = {
    status: {
        success: "bg-green text-light",
        error: "bg-red text-light",
    }
}

const notification = (message , status) => toast.custom((t) =>
    <div className={`flex justify-center items-center gap-x-2 ${styles.status[status]} text-sm font-bold rounded-lg px-4 py-2 ${t.visible ? 'animate-enter' : 'animate-leave'}`}>
        {status === "success" && <LuCheck size={20}/>}
        {status === "error" && <LuX size={20}/>}
        {message}
    </div>
);

export default notification;