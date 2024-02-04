// libraries
import {getServerSession} from "next-auth";

// components
import {NotVerified} from "@/components/partials/Empties";
import Content from "@/components/widgets/add-advertise/Content";

// helpers
import {authOptions} from "@/helpers/authOptions";

export const metadata = {
    title: 'افزودن آگهی',
}

const AddMyAdvertisePage = async () => {
    const session = await getServerSession(authOptions);
    const isVerified = Boolean(session?.user?.name && session?.user?.family && session?.user?.age);

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full h-full p-4">

            {
                isVerified ? (
                    <Content/>
                ) : (
                    <NotVerified/>
                )
            }

        </main>
    );
}

export default AddMyAdvertisePage;