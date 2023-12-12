// libraries
import {redirect} from "next/navigation";
import JwtDecode from "jwt-decode";

// components
import {VerifyPassword} from "@/components/widgets/VerifyPassword";

export const metadata = {
    title: 'تغییر رمز',
}

const VerifyPasswordPage = async ({searchParams}) => {

    try {

        const decodedUser = JwtDecode(searchParams.token);

        if (decodedUser?.user?.expire < Math.floor(Date.now() / 1000)) {
            return redirect("/auth/sign-in");
        } else {
            return (
                <main className="flex flex-col justify-center items-center gap-y-4 w-full max-w-[480px] bg-light rounded-lg shadow-3xl p-4">
                    <VerifyPassword/>
                </main>
            );
        }

    } catch (e) {
        return redirect("/auth/sign-in");
    }

}

export default VerifyPasswordPage;