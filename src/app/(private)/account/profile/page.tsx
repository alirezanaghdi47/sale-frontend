// components
import {Profile} from "@/components/widgets/Profile";

export const metadata = {
    title: 'پروفایل',
}

const ProfilePage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full h-full p-4">

            <Profile/>

        </main>
    );
}

export default ProfilePage;