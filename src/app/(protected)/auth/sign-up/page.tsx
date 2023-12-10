// components
import {SignUp} from "@/components/widgets/SignUp";

export const metadata = {
    title: 'عضویت',
}

const SignUpPage = () => {

    return (
        <main className="flex flex-col justify-center items-center gap-y-4 w-full max-w-[480px] bg-light rounded-lg shadow-3xl p-4">

            <SignUp/>

        </main>
    );
}

export default SignUpPage;