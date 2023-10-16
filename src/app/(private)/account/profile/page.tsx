// components

import ProfileForm from "@/components/widgets/private/profile/ProfileForm";

const ProfilePage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full p-4">

            <h1 className="text-dark font-bold text-base">
                پروفایل
            </h1>

            <ProfileForm/>

        </main>
    );
}

export default ProfilePage;