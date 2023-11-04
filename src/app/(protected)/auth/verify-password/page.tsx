// components
import {VerifyPassword} from "@/components/widgets/VerifyPassword";

export const metadata = {
    title: 'تغییر رمز',
}

const VerifyPasswordPage = () => {

    return (
        <main className="flex flex-col justify-center items-center gap-y-4 w-full bg-light rounded-lg shadow-3xl p-4">
            <VerifyPassword/>
        </main>
    );
}

export default VerifyPasswordPage;