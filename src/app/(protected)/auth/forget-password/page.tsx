// components
import {ForgetPassword} from "@/components/widgets/ForgetPassword";

export const metadata = {
    title: 'فراموشی رمز',
}

const ForgetPasswordPage = () => {

    return (
        <main className="flex flex-col justify-center items-center gap-y-4 w-full">
            <ForgetPassword/>
        </main>
    );
}

export default ForgetPasswordPage;