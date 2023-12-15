// libraries
import {getServerSession} from "next-auth";

// components
import {AddAdvertise} from "@/components/widgets/AddAdvertise";
import {NotVerified} from "@/components/partials/Empties";

// helpers
import {authOptions} from "@/helpers/authOptions";

export const metadata = {
    title: 'افزودن آگهی',
}

const AddAdvertisePage = async () => {

    const session = await getServerSession(authOptions);
    const isVerified = Boolean(session?.user?.name && session?.user?.family && session?.user?.phoneNumber);

    return (
        <main className="flex flex-col justify-start items-start gap-y-4 w-full h-full p-4">

            {
                isVerified ? (
                    <AddAdvertise/>
                ) : (
                    <NotVerified/>
                )
            }

        </main>
    );
}

export default AddAdvertisePage;