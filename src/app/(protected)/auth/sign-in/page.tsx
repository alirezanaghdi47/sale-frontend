// components
import {SignIn} from "@/components/widgets/SignIn";

export const metadata = {
    title: 'ورود',
}

const SignInPage = () => {

    return (
        <main className="flex flex-col justify-center items-center gap-y-4 w-full">
            <SignIn/>
        </main>
    );
}

export default SignInPage;