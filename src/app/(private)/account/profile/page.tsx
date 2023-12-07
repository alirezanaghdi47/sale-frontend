// components
import {Profile} from "@/components/widgets/Profile";

export const metadata = {
    title: 'پروفایل',
}

const ProfilePage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full md:max-w-[calc(100%_-_240px)] h-full min-h-[calc(100dvh_-_140px)] md:min-h-screen p-4">

            <Profile/>

        </main>
    );
}

export default ProfilePage;