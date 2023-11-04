// components
import {CopyRight, Logo} from "@/components/widgets/Protected";

const AuthLayout = (props) => {

    return (
        <div
            className="flex justify-center items-center w-full min-h-screen h-full bg-cover bg-center bg-no-repeat p-4"
            // style={{backgroundImage: 'url(/assets/images/blob.svg)'}}
        >

            <div className="flex flex-col justify-center items-center gap-y-4 w-full max-w-[480px]">

                <Logo/>

                {props.children}

                <CopyRight/>

            </div>

        </div>
    )
}

export default AuthLayout;

