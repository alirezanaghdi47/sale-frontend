// components
import Content from "@/components/widgets/profile/Content";

export const metadata = {
    title: 'پروفایل',
}

const ProfilePage = () => {

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full h-full p-4">
            <Content/>
        </main>
    );
}

export default ProfilePage;