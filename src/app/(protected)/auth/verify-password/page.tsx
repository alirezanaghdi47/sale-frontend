// components
import {VerifyPassword} from "@/components/widgets/VerifyPassword";

export const metadata = {
    title: 'تغییر رمز',
}

const VerifyPasswordPage = () => {

    return (
        <main className="flex flex-col justify-center items-center gap-y-4 w-full">
            <VerifyPassword/>
        </main>
    );
}

export default VerifyPasswordPage;