// components
import Content from "@/components/widgets/sign-in/Content";

export const metadata = {
    title: 'ورود',
}

const SignInPage = () => {

    return (
        <main className="flex flex-col justify-center items-center gap-y-4 w-full max-w-[480px] bg-light rounded-lg shadow-3xl p-4">
            <Content/>
        </main>
    );
}

export default SignInPage;