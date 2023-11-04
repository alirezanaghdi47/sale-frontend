// components
import {ForgetPassword} from "@/components/widgets/ForgetPassword";

export const metadata = {
    title: 'فراموشی رمز',
}

const ForgetPasswordPage = () => {

    return (
        <main className="flex flex-col justify-center items-center gap-y-4 w-full bg-light rounded-lg shadow-3xl p-4">
            <ForgetPassword/>
        </main>
    );
}

export default ForgetPasswordPage;