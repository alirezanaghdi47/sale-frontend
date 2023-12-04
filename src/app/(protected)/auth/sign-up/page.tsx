// components
import {SignUp} from "@/components/widgets/SignUp";

export const metadata = {
    title: 'عضویت',
}

const SignUpPage = () => {

    return (
        <main className="flex flex-col justify-center items-center gap-y-4 w-full">
            <SignUp/>
        </main>
    );
}

export default SignUpPage;