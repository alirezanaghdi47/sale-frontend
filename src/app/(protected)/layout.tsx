// libraries
import {CopyRight, Logo} from "@/components/widgets/Protected";

const AuthLayout = (props) => {

    return (
        <div className="relative flex flex-col justify-center items-center gap-y-4 w-full max-w-[360px] min-h-screen h-full p-4">

            <Logo/>

            {props.children}

            <CopyRight/>

        </div>
    )
}

export default AuthLayout;

